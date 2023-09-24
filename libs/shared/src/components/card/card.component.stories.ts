import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {CardComponent} from './card.component'
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

export default {
  title: 'shared/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CardComponent>;


const Template: Story<CardComponent> = (args: CardComponent) => ({
    component: CardComponent,
    props: args
})

// export const Default = () => Template.bind({})

export const Default = () => Template.bind({})
