import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {AdvisoryCardComponent} from './advisory-card.component'
import { AdvisoryAlertMock } from '../../mocks';

export default {
  title: 'shared/AdvisoryCardComponent',
  component: AdvisoryCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AdvisoryCardComponent>;


const Template: Story<AdvisoryCardComponent> = (args: AdvisoryCardComponent) => ({
    component: AdvisoryCardComponent,
    props: args
})

export const Default = Template.bind({})
Default.args = {
  alerts: AdvisoryAlertMock
}