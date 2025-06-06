# Contributing to Puddin Design System

We love your input! We want to make contributing to Puddin Design System as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable
2. Update the CHANGELOG.md with your changes
3. The PR will be merged once you have the sign-off of at least one other developer

## Any Contributions You Make Will Be Under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's [Issue Tracker](https://github.com/yourusername/puddin-design-system/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/puddin-design-system/issues/new); it's that easy!

## Write Bug Reports with Detail, Background, and Sample Code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

* Use TypeScript for all new code
* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).

## Component Development Guidelines

### 1. Component Structure

Each component should follow this structure:
```
ComponentName/
├── ComponentName.tsx        # Main component
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.test.tsx   # Tests
└── index.ts                # Exports
```

### 2. Component Implementation

- Use TypeScript for type safety
- Use Material-UI's styled API for styling
- Follow the theme token system
- Include proper JSDoc comments
- Export proper types

Example:
```tsx
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export interface MyComponentProps {
  /** Description of the prop */
  propName: string;
}

const StyledComponent = styled(Box)(({ theme }) => ({
  // Use theme tokens
  padding: theme.spacing(2),
  backgroundColor: theme.palette.surface.main,
}));

export const MyComponent: React.FC<MyComponentProps> = ({ propName }) => {
  return <StyledComponent>{propName}</StyledComponent>;
};
```

### 3. Storybook Stories

- Include all variants
- Show different states
- Include interactive examples
- Document props

Example:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof MyComponent> = {
  args: {
    propName: 'Example',
  },
};
```

### 4. Testing

- Write unit tests for all components
- Test different props and states
- Test accessibility
- Test responsive behavior

Example:
```tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent propName="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### 5. Accessibility

- Use semantic HTML
- Include ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast

### 6. Documentation

- Document all props
- Include usage examples
- Document accessibility features
- Include best practices

### 7. Performance

- Optimize renders
- Use proper memoization
- Consider bundle size
- Profile performance

### 8. Theme Integration

- Use theme tokens
- Support dark/light mode
- Follow spacing system
- Use typography scale

### 9. Responsive Design

- Test on different screen sizes
- Use responsive props
- Consider mobile-first
- Test touch interactions

### 10. Error Handling

- Handle edge cases
- Provide error states
- Include fallbacks
- Log errors properly 