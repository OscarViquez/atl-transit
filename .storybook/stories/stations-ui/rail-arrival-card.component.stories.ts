import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { RailArrivalCardComponent, RailArrivalMock } from 'stations-ui';

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

export const RailCardArrivalDefault = Template.bind({});
RailCardArrivalDefault.args = {
   railArrival: RailArrivalMock,
   systemMode: 'light'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
   railArrival: RailArrivalMock,
   systemMode: 'dark'
};
