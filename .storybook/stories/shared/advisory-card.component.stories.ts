import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { AdvisoryCardComponent, AdvisoryAlertMock } from 'shared';

export default {
   title: 'Components/Organism/Advisory Card',
   component: AdvisoryCardComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<AdvisoryCardComponent>;

const Template: Story<AdvisoryCardComponent> = (args: AdvisoryCardComponent) => ({
   component: AdvisoryCardComponent,
   props: args
});

export const Default = Template.bind({});
Default.args = {
   alerts: AdvisoryAlertMock
};
