import { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Components', "Layouts", "Trains"],
        locales: 'en-US',
      },
    },
  },
};

export default preview;