import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { HeaderComponent, pageHeaderStoryMock } from 'shared';

export default {
  title: 'Components/Shared/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HeaderComponent>;


const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args
})

export const Header = Template.bind({});
Header.args = {
   content: pageHeaderStoryMock
};

