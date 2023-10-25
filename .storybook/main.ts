import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
   stories: [
      'stories/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      'stories/stations-ui/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      'stories/search/**/*.stories.@(js|jsx|ts|tsx|mdx)'
   ],
   staticDirs: [
      '../libs/assets/src/lib/assets/icons',
      '../libs/assets/src/lib/assets/main.scss'
   ],
   addons: ['@storybook/addon-essentials', '@storybook/addon-styling'],
   framework: {
      name: '@storybook/angular',
      options: {}
   }
};

export default config;
// '../libs/stations/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
