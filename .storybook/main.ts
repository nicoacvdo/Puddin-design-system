import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-viewport"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return {
      ...config,
      base: '/',
    };
  },
};

export default config;