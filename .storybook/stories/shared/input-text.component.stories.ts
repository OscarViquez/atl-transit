import { Meta, Story, moduleMetadata } from '@storybook/angular';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TextInputComponent } from '../../../libs/shared/src/components/inputs/text-input/text-input.component';

export default {
   title: 'Components/Atoms/Inputs',
   component: TextInputComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<TextInputComponent>;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
   component: TextInputComponent,
   props: args
});

export const InputStandard = Template.bind({});
InputStandard.args = {};
