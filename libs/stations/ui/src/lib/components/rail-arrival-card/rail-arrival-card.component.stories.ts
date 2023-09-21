import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { RailArrivalCardComponent } from './rail-arrival-card.component';
// import { ButtonLightModeMock, ButtonDarkModeMock } from '../../mocks'
// import { SiderbarDarkMocks,SiderbarLightMocks } from './mocks/button.mocks';

export default {
   title: 'Trains/Train Station Card',
   component: RailArrivalCardComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<RailArrivalCardComponent>;

const Template: Story<RailArrivalCardComponent> = (args: RailArrivalCardComponent) => ({
   component: RailArrivalCardComponent,
   props: args
});

export const Default = () => Template.bind({});
