import { TabComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Atoms/Tabs',
   component: TabComponent,
   decorators: [moduleMetadata({ imports: [TabComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<TabComponent>;

type Story = StoryObj<TabComponent>;

export const Default: Story = {
   args: {}
};
