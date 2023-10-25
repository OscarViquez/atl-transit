import { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Components', "Layouts", "Trains", "Search Modal"],
        locales: 'en-US',
      },
    },
  },
};

export default preview;