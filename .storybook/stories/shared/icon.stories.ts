import { IconComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Atoms/Icon',
   component: IconComponent,
   decorators: [moduleMetadata({ imports: [IconComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
   args: {
      category: 'navigation',
      name: 'overview',
      mode: 'light'
   }
};
