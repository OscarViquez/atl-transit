import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TrainStationCardComponent } from '../train-station-card.component';
import { TrainStationMock } from '../mocks/train-station-card.mock';
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

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