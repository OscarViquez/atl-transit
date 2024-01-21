// SidebarComponent
import { SidebarComponent } from '@atl-transit/navigation';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
export default {
   title: 'Navigation/Sidebar',
   component: SidebarComponent,
   decorators: [moduleMetadata({ imports: [SidebarComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<SidebarComponent>;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
   args: {
   }
};
