# Puddin Design System

A modern React component library based on Material Design 3.0 guidelines, built with TypeScript and Material-UI.

## Features

- 🎨 Material Design 3.0 compliant components
- 🌓 Light and dark theme support
- 📱 Responsive and accessible components
- 📦 Tree-shakeable and optimized bundle
- 📚 Comprehensive documentation with Storybook
- 🔍 TypeScript support
- 🧪 Tested components

## Installation

```bash
npm install puddin-design-system
# or
yarn add puddin-design-system
```

## Quick Start

```tsx
import { Button, Card, theme } from 'puddin-design-system';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card variant="elevated">
        <Button variant="filled">Click me</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Available Components

### Button
```tsx
<Button variant="filled">Filled Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="text">Text Button</Button>
<Button variant="elevated">Elevated Button</Button>
<Button variant="tonal">Tonal Button</Button>
```

### Card
```tsx
<Card variant="elevated">Elevated Card</Card>
<Card variant="filled">Filled Card</Card>
<Card variant="outlined">Outlined Card</Card>
```

### TextField
```tsx
<TextField variant="outlined" label="Outlined" />
<TextField variant="filled" label="Filled" />
<TextField variant="standard" label="Standard" />
```

### NavigationBar
```tsx
<NavigationBar navVariant="top" />
<NavigationBar navVariant="bottom" />
```

### CryptoCard
```tsx
<CryptoCard 
  currency="SOL"
  percentageChange="+3.43%"
  price="$243.44"
  chartData={[...]}
/>
```

### Swap
```tsx
<Swap />
```

## Theme Customization

The design system includes a Material Design 3.0 theme that can be customized:

```tsx
import { theme } from 'puddin-design-system';
import { ThemeProvider } from '@mui/material/styles';

<ThemeProvider theme={theme}>
  {/* Your app components */}
</ThemeProvider>
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/puddin-design-system.git
cd puddin-design-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start development server:
```bash
npm start
# or
yarn start
```

4. Run Storybook:
```bash
npm run storybook
# or
yarn storybook
```

5. Build the library:
```bash
npm run build
# or
yarn build
```

## Project Structure

```
puddin-design-system/
├── src/
│   ├── components/     # React components
│   ├── theme/         # Theme configuration
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── stories/           # Storybook stories
├── scripts/           # Build and utility scripts
├── .storybook/        # Storybook configuration
├── dist/             # Build output
└── types/            # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
npm test
# or
yarn test
```

## Building

```bash
npm run build
# or
yarn build
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 