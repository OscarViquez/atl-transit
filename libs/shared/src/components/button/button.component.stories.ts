import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import {
   ButtonLightModeMock,
   ButtonActiveMockDark,
   ButtonDarkModeMock,
   ButtonWithIconMock,
   ButtonActiveMockLight
} from '../../mocks';
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

export default {
   title: 'shared/Button',
   component: ButtonComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
   component: ButtonComponent,
   props: args
});

// export const Default = () => Template.bind({})


export const ButtonLightMode = Template.bind({});
ButtonLightMode.args = {
   content: ButtonLightModeMock
};

export const ButtonDarkMode = Template.bind({});
ButtonDarkMode.args = {
   content: ButtonDarkModeMock
};

export const ButtonLightModeActive = Template.bind({});
ButtonLightModeActive.args = {
   content: ButtonActiveMockLight
};

export const ButtonDarkModeActive = Template.bind({});
ButtonDarkModeActive.args = {
   content: ButtonActiveMockDark
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
   content: ButtonWithIconMock
};

export const SkeletonLoader = Template.bind({});
SkeletonLoader.args = {
   content: ButtonLightModeMock,
   isLoading: true
};

export const SkeletonLoaderDark = Template.bind({});
SkeletonLoaderDark.args = {
   content: ButtonDarkModeMock,
   isLoading: true
};
