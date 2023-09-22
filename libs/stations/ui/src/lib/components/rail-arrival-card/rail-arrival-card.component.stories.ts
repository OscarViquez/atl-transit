import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { RailArrivalCardComponent } from './rail-arrival-card.component';
import { RailArrivalMock } from '../../mocks';

export default {
   title: 'Trains/Rail Arrival Card',
   component: RailArrivalCardComponent,
   decorators: [
      moduleMetadata({
         imports: [RailArrivalCardComponent]
      })
   ]
} as Meta<RailArrivalCardComponent>;

const Template: Story<RailArrivalCardComponent> = (args: RailArrivalCardComponent) => ({
   component: RailArrivalCardComponent,
   props: args
});

export const Default = Template.bind({});
Default.args = {
   railArrival: RailArrivalMock,
   systemMode: 'light'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
   railArrival: RailArrivalMock,
   systemMode: 'dark'
};
