import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CardHeaderComponent } from './card-header.component';
import { CardHeaderMock } from '../../mocks';

export default {
   title: 'shared/CardHeader',
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

export const Default = Template.bind({});
Default.args = {
   content: CardHeaderMock
};
