import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TabComponent, TabMock } from 'shared';

export default {
   title: 'Components/Atoms/Tab',
   component: TabComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<TabComponent>;

const Template: Story<TabComponent> = (args: TabComponent) => ({
   component: TabComponent,
   props: args
});

export const Tab = Template.bind({});
Tab.args = {
   content: TabMock
};
