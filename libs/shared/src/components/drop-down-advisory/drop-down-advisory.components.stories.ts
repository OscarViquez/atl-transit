import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { DropDownAdvisoryComponent } from './drop-down-advisory.component';
import { DropDownSingle } from '../../mocks';

export default {
   title: 'shared/DropDownAdvisory',
   component: DropDownAdvisoryComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<DropDownAdvisoryComponent>;

const Template: Story<DropDownAdvisoryComponent> = (args: DropDownAdvisoryComponent) => ({
   component: DropDownAdvisoryComponent,
   props: args
});

export const Default = Template.bind({});
Default.args = {
   content: DropDownSingle
};
