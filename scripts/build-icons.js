import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_BASE_DIR = path.resolve(process.cwd(), "scripts/icons");
const OUTPUT_BASE_DIR = path.resolve(process.cwd(), "src/icons");

async function convertSvgToReact(svg, componentName) {
  // Format the component name to ensure it's valid
  const formattedName = componentName.replace(/[^a-zA-Z0-9$_]/g, "");
  if (formattedName === "") {
    throw new Error(`Invalid component name: ${componentName}`);
  }

  // Extract the SVG content between the <svg> tags
  const svgTagMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!svgTagMatch) {
    throw new Error(`Invalid SVG format: No <svg> tag found`);
  }

  // Extract viewBox
  const viewBoxMatch = svg.match(/viewBox=["']([^"']+)["']/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // Extract inner content (everything between <svg> and </svg>)
  const innerContent = svgTagMatch[1].trim();

  // Remove any existing width/height/fill/class attributes from inner SVG elements
  const cleanedInnerContent = innerContent
    .replace(/\s(width|height|fill|class)="[^"]*"/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // Create the TypeScript component with proper SVG props handling
  return `import React from 'react';

interface ${formattedName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ${formattedName} = ({
  size = 24,
  color,
  className,
  ...props
}: ${formattedName}Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      className={className}
      viewBox="${viewBox}"
      {...props}
    >
      ${cleanedInnerContent}
    </svg>
  );
};
`;

}

async function processVariant(variant) {
  const svgDir = path.join(SVG_BASE_DIR, variant);
  const outputDir = path.join(OUTPUT_BASE_DIR, variant);

  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    
    // Read all SVG files in the variant directory
    const files = await fs.readdir(svgDir);
    const svgFiles = files.filter((file) => file.endsWith(".svg"));
    
    if (svgFiles.length === 0) {
      console.log(`No SVG files found in ${variant} directory.`);
      return [];
    }
    
    const exports = [];
    
    // Generate components for each SVG file
    for (const file of svgFiles) {
      const componentName = path.basename(file, ".svg");
      const svgContent = await fs.readFile(path.join(svgDir, file), "utf-8");
      const componentCode = await convertSvgToReact(svgContent, componentName);
      
      // Write the component file
      const outputPath = path.join(outputDir, `${componentName}.tsx`);
      await fs.writeFile(outputPath, componentCode, "utf-8");
      console.log(`Generated ${componentName} component in ${variant}`);
      
      exports.push(componentName);
    }
    
    // Create index.ts export file for the variant
    const variantExportContent =
      exports
        .map((name) => `export * from './${name}';`)
        .join("\n") + "\n";

    await fs.writeFile(
      path.join(outputDir, "index.ts"),
      variantExportContent,
      "utf-8"
    );

    return exports;
  } catch (error) {
    console.error(`Error processing ${variant} variant:`, error);
    return [];
  }
}

async function buildIcons() {
  try {
    console.log("Building icons...");

    // Ensure base output directory exists
    await fs.mkdir(OUTPUT_BASE_DIR, { recursive: true });

    // Read all variant directories
    const items = await fs.readdir(SVG_BASE_DIR, { withFileTypes: true });
    const variantDirs = items
      .filter((item) => item.isDirectory())
      .map((dir) => dir.name);

    if (variantDirs.length === 0) {
      console.log("No variant directories found in the icons folder.");
      return;
    }

    const allExports = [];

    // Process each variant directory
    for (const variant of variantDirs) {
      const variantExports = await processVariant(variant);
      allExports.push(...variantExports.map((name) => ({ name, variant })));
    }

    // Create main index.ts that re-exports all variants
    const mainExportContent =
      variantDirs
        .map((variant) => `export * as ${variant} from './${variant}';`)
        .join("\n") + "\n";

    await fs.writeFile(
      path.join(OUTPUT_BASE_DIR, "index.ts"),
      mainExportContent,
      "utf-8"
    );

    console.log("\nSuccessfully built all icons!");
  } catch (error) {
    console.error("Error building icons:", error);
    process.exit(1);
  }
}

// Run the build process
buildIcons();
