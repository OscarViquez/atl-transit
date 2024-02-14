import { HeaderComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Atoms/Headers',
   component: HeaderComponent,
   decorators: [moduleMetadata({ imports: [HeaderComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a Header component that can be used in different themes.'
         }
      }
   }
} as Meta<HeaderComponent>;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
   args: {
      content: {
         title: 'Train arrivals',
         description: 'Real-time information on the scheduled arrival times of trains.'
      }
   }
};

export const MainHeader: Story = {
   args: {
      content: {
         title: 'Train arrivals',
         description: 'Real-time information on the scheduled arrival times of trains.'
      },
      variant: 'main'
   }
};

export const SectionHeader: Story = {
   args: {
      content: {
         title: 'Explore Station Resources',
         description: 'Discover Maps, Parking, and Ticket Information'
      },
      variant: 'section'
   }
};
