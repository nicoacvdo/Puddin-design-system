# Puddin Design System

A modern, accessible, and customizable design system built with React and Material-UI, featuring a beautiful swap interface and charting capabilities.

## 🚀 Features

- **Modern UI Components**: Built with React and Material-UI
- **TypeScript Support**: Full TypeScript support for better development experience
- **Customizable Theme**: Easy to customize and extend
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Built with accessibility in mind
- **Storybook Documentation**: Interactive documentation and component playground

## 📦 Installation

```bash
npm install puddin-design-system
# or
yarn add puddin-design-system
```

## 🎨 Usage

```jsx
import { SwapWithChart } from 'puddin-design-system';

function App() {
  return (
    <SwapWithChart />
  );
}
```

## 🛠️ Development

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

3. Start Storybook:
```bash
npm run storybook
# or
yarn storybook
```

4. Build the library:
```bash
npm run build
# or
yarn build
```

## 📚 Documentation

Visit our [Storybook](https://your-storybook-url.com) for detailed documentation and interactive examples.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/)
- [Recharts](https://recharts.org/)
- [Storybook](https://storybook.js.org/)

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