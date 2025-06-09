import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(__dirname, '../scripts/icons');

async function processDirectory(directory) {
  const items = await fs.readdir(directory, { withFileTypes: true });
  let renamedCount = 0;

  // Process files in the current directory
  const files = items.filter(item => item.isFile() && item.name.endsWith('.svg'));
  for (const file of files) {
    const oldName = file.name;
    const nameWithoutExt = oldName.replace(/\.svg$/i, '');
    
    // Process filename (without extension)
    const processedName = nameWithoutExt
      .replace(/[^\w\s-]/g, '')  // Remove special characters except spaces, hyphens, and underscores
      .replace(/[_-]+/g, ' ')     // Replace underscores and hyphens with spaces
      .replace(/\s+/g, ' ')      // Replace multiple spaces with single space
      .trim()                    // Trim whitespace
      .split(/\s+/)              // Split by spaces
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
      .join('');                 // Join without separators
    
    const newName = `${processedName}.svg`; // Add back the .svg extension
    
    if (newName !== oldName) {
      const oldPath = path.join(directory, oldName);
      const newPath = path.join(directory, newName);
      
      try {
        await fs.access(newPath);
        console.log(`Skipping "${oldName}" - "${newName}" already exists`);
      } catch {
        await fs.rename(oldPath, newPath);
        console.log(`Renamed "${oldName}" to "${newName}" in ${path.relative(ICONS_DIR, directory)}`);
        renamedCount++;
      }
    }
  }

  // Process subdirectories
  const dirs = items.filter(item => item.isDirectory());
  for (const dir of dirs) {
    const subDirPath = path.join(directory, dir.name);
    const renamedInSubdir = await processDirectory(subDirPath);
    renamedCount += renamedInSubdir;
  }

  return renamedCount;
}

async function renameSvgFiles() {
  try {
    console.log('Renaming SVG files...');
    
    // Check if icons directory exists
    try {
      await fs.access(ICONS_DIR);
    } catch {
      console.error(`Icons directory not found: ${ICONS_DIR}`);
      return;
    }
    
    const renamedCount = await processDirectory(ICONS_DIR);
    
    if (renamedCount === 0) {
      console.log('\nNo files needed renaming.');
    } else {
      console.log(`\nSuccessfully renamed ${renamedCount} SVG files.`);
    }
    
  } catch (error) {
    console.error('Error renaming SVG files:', error);
    process.exit(1);
  }
}

// Run the script
renameSvgFiles();
