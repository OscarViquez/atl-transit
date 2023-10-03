import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { DropDownSingle } from '../../mocks';

export default {
   title: 'shared/Dropdown',
   component: DropdownComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<DropdownComponent>;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
   component: DropdownComponent,
   props: args
});

export const Default = Template.bind({});
Default.args = {
   content: DropDownSingle
};
