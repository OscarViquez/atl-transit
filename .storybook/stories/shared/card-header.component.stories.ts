import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CardHeaderComponent, CardHeaderMock } from 'shared';

export default {
   title: 'Components/Atoms/Card Header',
   component: CardHeaderComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<CardHeaderComponent>;

const Template: Story<CardHeaderComponent> = (args: CardHeaderComponent) => ({
   component: CardHeaderComponent,
   props: args
});

export const CardHeader = Template.bind({});
CardHeader.args = {
   content: CardHeaderMock
};
