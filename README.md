# 🎨 Puddin Design System

<div align="center">
  <img src="docs/banner.png" alt="Puddin Design System Banner" width="800"/>
  
  <p>
    <strong>A deliciously modern design system for building beautiful web applications</strong>
  </p>

  <p>
    <a href="#-features">✨ Features</a> •
    <a href="#-quick-start">🚀 Quick Start</a> •
    <a href="#-interactive-playground">🎮 Playground</a> •
    <a href="#-documentation">📚 Docs</a>
  </p>

  <p>
    <a href="https://github.com/your-username/puddin-design-system/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"/>
    </a>
    <a href="https://www.npmjs.com/package/puddin-design-system">
      <img src="https://img.shields.io/npm/v/puddin-design-system.svg" alt="npm version"/>
    </a>
    <a href="https://discord.gg/your-discord">
      <img src="https://img.shields.io/discord/your-discord-id?color=7289DA&label=Discord&logo=discord&logoColor=white" alt="Discord"/>
    </a>
  </p>
</div>

A modern, accessible, and customizable design system built with Material-UI and TypeScript. Perfect for building beautiful web applications with a consistent look and feel.

## ✨ Features

- 🎯 **Pixel-Perfect Components**: Every component matches our Figma design system exactly
- 🎨 **Material Design 3**: Built on top of Material-UI with custom theming
- 📱 **Responsive Design**: Works flawlessly on all devices
- 🎭 **Dark Mode Support**: Beautiful dark theme included
- 📊 **Chart Integration**: Ready-to-use chart components
- 🎮 **Interactive Components**: Rich, interactive UI elements
- 🎯 **TypeScript Support**: Full type safety and autocompletion
- 📚 **Comprehensive Documentation**: Detailed guides and examples

## 🚀 Quick Start

```bash
# Install the package
npm install puddin-design-system

# Or with yarn
yarn add puddin-design-system
```

## 🎯 Usage Examples

### 🎨 Buttons

```tsx
import { Button } from 'puddin-design-system';

// Filled Button
<Button variant="filled">Click Me! 🎯</Button>

// Outlined Button
<Button variant="outlined">Outline Me! ✨</Button>

// Text Button
<Button variant="text">Just Text! 📝</Button>
```

### 🎴 Cards

```tsx
import { Card } from 'puddin-design-system';

// Elevated Card
<Card variant="elevated">
  <CardContent>
    <Typography>Floating Card! 🎈</Typography>
  </CardContent>
</Card>

// Filled Card
<Card variant="filled">
  <CardContent>
    <Typography>Solid Card! 🎨</Typography>
  </CardContent>
</Card>
```

### 💰 Crypto Components

```tsx
import { CryptoCard, Swap } from 'puddin-design-system';

// Crypto Card with Chart
<CryptoCard
  symbol="BTC"
  price="$45,000"
  change="+5.2%"
  chartData={data}
/>

// Swap Interface
<Swap
  fromToken="ETH"
  toToken="BTC"
  rate="0.05"
  chartData={data}
/>
```

## 🎨 Design Tokens

Our design system uses a comprehensive token system:

### 🎯 Colors

```tsx
// Primary Colors
theme.palette.primary.main    // #6750A4
theme.palette.primary.light   // #7F67BE
theme.palette.primary.dark    // #4F378B

// Surface Colors
theme.palette.surface.main    // #1C1B1F
theme.palette.surface.light   // #2D2C31
theme.palette.surface.dark    // #0F0E11
```

### 📏 Spacing

```tsx
// 8px Base Unit
theme.spacing(1)  // 8px
theme.spacing(2)  // 16px
theme.spacing(3)  // 24px
theme.spacing(4)  // 32px
```

## 🎮 Interactive Examples

### 🎯 Button States

```tsx
<Button variant="filled" disabled>Disabled 🚫</Button>
<Button variant="filled" loading>Loading... ⏳</Button>
<Button variant="filled" error>Error! ❌</Button>
```

### 🎴 Card Interactions

```tsx
<Card variant="elevated" hoverable>
  <CardContent>
    <Typography>Hover Me! 🎯</Typography>
  </CardContent>
</Card>
```

## 🎨 Theme Customization

```tsx
import { createTheme } from 'puddin-design-system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#7F67BE',
      dark: '#4F378B',
    },
    // ... more customization
  },
});
```

## 📱 Responsive Design

Our components are fully responsive and work great on all devices:

```tsx
// Mobile First
<Box sx={{ width: { xs: '100%', sm: '50%', md: '33%' } }}>
  <Card>Responsive Card! 📱</Card>
</Box>
```

## 🎯 Best Practices

1. 🎨 **Use Design Tokens**
   ```tsx
   // ✅ Good
   <Box sx={{ p: 2 }}>  // Uses theme spacing
   
   // ❌ Bad
   <Box sx={{ padding: '16px' }}>  // Hard-coded value
   ```

2. 📱 **Responsive Design**
   ```tsx
   // ✅ Good
   <Box sx={{ width: { xs: '100%', md: '50%' } }}>
   
   // ❌ Bad
   <Box sx={{ width: '500px' }}>
   ```

3. 🎭 **Theme Integration**
   ```tsx
   // ✅ Good
   <Box sx={{ bgcolor: 'surface.main' }}>
   
   // ❌ Bad
   <Box sx={{ backgroundColor: '#1C1B1F' }}>
   ```

## 🚀 Development

```bash
# Clone the repository
git clone https://github.com/your-username/puddin-design-system.git

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build the package
npm run build
```

## 📚 Documentation

- [Component Documentation](https://your-storybook-url)
- [Design Tokens](https://your-storybook-url/tokens)
- [Theme Customization](https://your-storybook-url/theme)
- [Contributing Guide](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎨 Design System Preview

![Design System Preview](docs/preview.png)

## 🎯 Component Showcase

### 🎨 Buttons
![Button Variants](docs/buttons.png)

### 🎴 Cards
![Card Variants](docs/cards.png)

### 💰 Crypto Components
![Crypto Components](docs/crypto.png)

## 🎮 Interactive Demo

Try our components in the [Storybook](https://your-storybook-url)!

## 🎯 Roadmap

- [ ] 🎨 More component variants
- [ ] 📱 Mobile-specific components
- [ ] 🎭 Advanced theming options
- [ ] 📊 More chart types
- [ ] 🎮 Interactive examples
- [ ] 📚 Enhanced documentation

## 🤝 Community

- 💬 [Discord](https://discord.gg/your-discord)
- 🐦 [Twitter](https://twitter.com/your-twitter)
- 📝 [Blog](https://your-blog-url)

## 🎨 Design Resources

- [Figma Kit](https://your-figma-url)
- [Color Palette](https://your-color-palette-url)
- [Icon Set](https://your-icon-set-url)

## 📚 Related Projects

- [Puddin Charts](https://github.com/your-username/puddin-charts)
- [Puddin Icons](https://github.com/your-username/puddin-icons)
- [Puddin Templates](https://github.com/your-username/puddin-templates)

## 🎯 Support

Need help? Open an issue or reach out to us on [Discord](https://discord.gg/your-discord)!

## 🎨 Credits

- Design by [Your Design Team]
- Development by [Your Development Team]
- Icons by [Your Icon Provider]
- Charts by [Your Chart Provider]

---

Made with ❤️ by the Puddin Team 

## 🎮 Interactive Playground

Try these interactive examples right in your browser! Click the "Edit" button to modify the code.

### 🎨 Button Playground

```tsx live
function ButtonPlayground() {
  const [variant, setVariant] = useState('filled');
  const [color, setColor] = useState('primary');
  const [size, setSize] = useState('medium');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Stack spacing={2}>
      <Button
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        loading={loading}
      >
        {loading ? 'Loading...' : 'Click Me! 🎯'}
      </Button>
      
      <Stack direction="row" spacing={2}>
        <Select
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          label="Variant"
        >
          <MenuItem value="filled">Filled</MenuItem>
          <MenuItem value="outlined">Outlined</MenuItem>
          <MenuItem value="text">Text</MenuItem>
        </Select>
        
        <Select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          label="Color"
        >
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="secondary">Secondary</MenuItem>
          <MenuItem value="success">Success</MenuItem>
        </Select>
        
        <Select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          label="Size"
        >
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </Stack>
      
      <Stack direction="row" spacing={2}>
        <Switch
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
          label="Disabled"
        />
        <Switch
          checked={loading}
          onChange={(e) => setLoading(e.target.checked)}
          label="Loading"
        />
      </Stack>
    </Stack>
  );
}
```

### 🎴 Card Playground

```tsx live
function CardPlayground() {
  const [variant, setVariant] = useState('elevated');
  const [elevation, setElevation] = useState(1);
  const [hoverable, setHoverable] = useState(true);
  const [content, setContent] = useState('Card Content');

  return (
    <Stack spacing={2}>
      <Card
        variant={variant}
        elevation={elevation}
        hoverable={hoverable}
        sx={{ width: 300 }}
      >
        <CardContent>
          <Typography variant="h6">Interactive Card 🎴</Typography>
          <Typography>{content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
      
      <Stack direction="row" spacing={2}>
        <Select
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          label="Variant"
        >
          <MenuItem value="elevated">Elevated</MenuItem>
          <MenuItem value="filled">Filled</MenuItem>
          <MenuItem value="outlined">Outlined</MenuItem>
        </Select>
        
        <Slider
          value={elevation}
          onChange={(e, value) => setElevation(value)}
          min={0}
          max={5}
          marks
          valueLabelDisplay="auto"
          label="Elevation"
        />
      </Stack>
      
      <TextField
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label="Card Content"
        fullWidth
      />
      
      <Switch
        checked={hoverable}
        onChange={(e) => setHoverable(e.target.checked)}
        label="Hoverable"
      />
    </Stack>
  );
}
```

### 💰 Crypto Component Playground

```tsx live
function CryptoPlayground() {
  const [token, setToken] = useState('BTC');
  const [price, setPrice] = useState('45000');
  const [change, setChange] = useState('5.2');
  const [chartType, setChartType] = useState('line');

  return (
    <Stack spacing={2}>
      <CryptoCard
        symbol={token}
        price={`$${price}`}
        change={`${change}%`}
        chartType={chartType}
        chartData={[
          { time: '1h', value: 44000 },
          { time: '2h', value: 44500 },
          { time: '3h', value: 45000 },
          { time: '4h', value: 44800 },
          { time: '5h', value: 45200 },
        ]}
      />
      
      <Stack direction="row" spacing={2}>
        <Select
          value={token}
          onChange={(e) => setToken(e.target.value)}
          label="Token"
        >
          <MenuItem value="BTC">Bitcoin (BTC)</MenuItem>
          <MenuItem value="ETH">Ethereum (ETH)</MenuItem>
          <MenuItem value="SOL">Solana (SOL)</MenuItem>
        </Select>
        
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
          type="number"
        />
        
        <TextField
          value={change}
          onChange={(e) => setChange(e.target.value)}
          label="Change %"
          type="number"
        />
      </Stack>
      
      <Select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        label="Chart Type"
      >
        <MenuItem value="line">Line Chart</MenuItem>
        <MenuItem value="area">Area Chart</MenuItem>
        <MenuItem value="candlestick">Candlestick</MenuItem>
      </Select>
    </Stack>
  );
}
```

### 🎨 Theme Playground

```tsx live
function ThemePlayground() {
  const [primaryColor, setPrimaryColor] = useState('#6750A4');
  const [secondaryColor, setSecondaryColor] = useState('#EF5350');
  const [mode, setMode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Typography variant="h6">Theme Preview</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="filled">Primary Button</Button>
            <Button variant="filled" color="secondary">Secondary Button</Button>
          </Stack>
        </Box>
        
        <Stack direction="row" spacing={2}>
          <TextField
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            label="Primary Color"
          />
          
          <TextField
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            label="Secondary Color"
          />
        </Stack>
        
        <Switch
          checked={mode === 'dark'}
          onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
          label="Dark Mode"
        />
      </Stack>
    </ThemeProvider>
  );
}
``` 