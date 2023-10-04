import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { pageHeaderStoryMock } from '../../mocks';

export default {
  title: 'shared/Header',
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

export const Default = Template.bind({});
Default.args = {
   content: pageHeaderStoryMock
};

