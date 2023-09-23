import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TabComponent } from './tab.component';

export default {
  title: 'shared/Tab',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TabComponent>;


const Template: Story<TabComponent> = (args: TabComponent) => ({
    component: TabComponent,
    props: args
})

export const Default = () => Template.bind({})