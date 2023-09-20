import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TrainStationCardComponent } from './train-station-card.component';
// import { ButtonLightModeMock, ButtonDarkModeMock } from '../../mocks'
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

export const Default = () => Template.bind({});
