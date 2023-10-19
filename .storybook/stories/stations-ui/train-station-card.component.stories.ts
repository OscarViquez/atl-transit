import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TrainStationCardComponent,TrainStationMock } from 'stations-ui';

export default {
   title: 'Trains/Train Station Card',
   component: TrainStationCardComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<TrainStationCardComponent>;

const Template: Story<TrainStationCardComponent> = (args: TrainStationCardComponent) => ({
   component: TrainStationCardComponent,
   props: args
});

export const FivePointsStation = Template.bind({});
FivePointsStation.args = {
   content: TrainStationMock
};