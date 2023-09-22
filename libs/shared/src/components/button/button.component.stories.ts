import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonLightModeMock, ButtonDarkModeMock,ButtonWithIconMock } from '../../mocks'
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

export default {
  title: 'shared/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonComponent>;


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args
})

// export const Default = () => Template.bind({})

export const Default = Template.bind({})
Default.args = {
  content: ButtonLightModeMock
}

export const ButtonLightMode = Template.bind({})
ButtonLightMode.args = {
    content: ButtonLightModeMock
}

export const ButtonDarkMode = Template.bind({})
ButtonDarkMode.args = {
    content: ButtonDarkModeMock
}

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
    content: ButtonWithIconMock
}
