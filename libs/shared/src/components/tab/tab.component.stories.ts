import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { TabMock } from '../../mocks';

export default {
   title: 'shared/Tab',
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

export const Default = Template.bind({});
Default.args = {
   content: TabMock
};
