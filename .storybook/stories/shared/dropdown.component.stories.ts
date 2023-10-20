import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { DropdownComponent, DropDownSingle } from 'shared';

export default {
   title: 'Components/Atoms/Dropdown',
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

export const Dropdown = Template.bind({});
Dropdown.args = {
   content: DropDownSingle
};
