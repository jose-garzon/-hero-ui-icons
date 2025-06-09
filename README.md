# @hero-ui/icons

A collection of customizable React icons built from SVG files.

## Credits

This package provides React components for the [Hero UI](https://www.heroui.com/) icons. All icons are the property of the Hero UI team and are used in accordance with their licensing terms.

## Features

- 🚀 Tree-shakable ES modules
- 🎨 Customizable SVG icons
- 🦊 Optimized with SVGR
- 📦 Lightweight and performant
- 🔍 TypeScript support
- 🎯 Built with Vite and Rollup

## Installation

```bash
# Using npm
npm install @hero-ui/icons

# Using yarn
yarn add @hero-ui/icons

# Using pnpm
pnpm add @hero-ui/icons
```

## Usage

```jsx
import { IconName } from "@hero-ui/icons";

function App() {
  return (
    <div>
      <IconName className="h-6 w-6" />
    </div>
  );
}
```

### Props

All icons accept the following props:

| Prop      | Type                    | Default        | Description                       |
| --------- | ----------------------- | -------------- | --------------------------------- |
| className | string                  | ''             | Additional CSS class name         |
| style     | React.CSSProperties     | {}             | Inline styles                     |
| color     | string                  | 'currentColor' | Icon color                        |
| size      | number \| string        | 24             | Width and height of the icon      |
| title     | string                  | undefined      | Accessibility: title for the icon |
| ...rest   | SVGProps<SVGSVGElement> | {}             | All other SVG props               |

## Available Icons

Check the `src/icons` directory for all available icons. Each icon is exported as a named export from the package.

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## License

MIT
