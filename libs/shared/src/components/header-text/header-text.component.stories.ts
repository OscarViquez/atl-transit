import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {HeaderTextComponent} from './header-text.component'
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

export default {
  title: 'shared/HeaderText',
  component: HeaderTextComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HeaderTextComponent>;


const Template: Story<HeaderTextComponent> = (args: HeaderTextComponent) => ({
    component: HeaderTextComponent,
    props: args
})

// export const Default = () => Template.bind({})

export const Default = () => Template.bind({})
