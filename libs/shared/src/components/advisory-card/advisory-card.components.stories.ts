import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {AdvisoryCardComponent} from './advisory-card.component'

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

export const Default = () => Template.bind({})