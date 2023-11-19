import { ThemeButtonComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'button',
   component: ThemeButtonComponent,
   decorators: [moduleMetadata({ imports: [ThemeButtonComponent] })]
} as Meta<ThemeButtonComponent>;

type Story = StoryObj<ThemeButtonComponent>;

export const Default: Story = {
   args: {
      props: {
         content: {
            label: 'Nearest',
            href: 'https://www.google.com/maps',
            id: 'myButton'
         },
         type: 'default',
         variant: 'primary',
         mode: 'light',
         align: 'center',
      }
   }
};

export const ButtonMenuVariant: Story = {
   args: {
      props: {
         content: {
            label: 'Nearest',
            href: 'https://www.google.com/maps',
            id: 'myButton'
         },
         type: 'menu',
         variant: 'primary',
         mode: 'light',
         align: 'center',
         icon: {
            path: 'icons/navigation/overview-icon.svg'
         }
      }
   }
};

export const ButtonTextVariant: Story = {
   args: {
      props: {
         content: {
            label: 'Nearest',
            href: 'https://www.google.com/maps',
            id: 'myButton'
         },
         type: 'text',
         variant: 'primary',
         mode: 'light',
         align: 'center',
         icon: {
            path: '/icons/navigation/test-icon.svg'
         }
      }
   }
};
