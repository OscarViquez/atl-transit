import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
   stories: [
      // 'search/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      'stories/navigation/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      'stories/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
      'stories/directives/**/*.stories.@(js|jsx|ts|tsx|mdx)',
   ],
   staticDirs: [
      //  for icons
      '../libs',
      '../src/styles.scss'
   ],
   addons: ['@storybook/addon-essentials', '@storybook/addon-styling'],
   framework: {
      name: '@storybook/angular',
      options: {}
   },
   docs: {
      autodocs: true
   }
};

export default config;
// '../libs/stations/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
