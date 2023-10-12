import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { LoadingSkeletonComponent } from './loading-skeleton.component';

export default {
   title: 'shared/Skeleton Loader',
   component: LoadingSkeletonComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<LoadingSkeletonComponent>;

const Template: Story<LoadingSkeletonComponent> = (args: LoadingSkeletonComponent) => ({
   component: LoadingSkeletonComponent,
   props: args
});


export const Tab = Template.bind({});
Tab.args = {
   loadingItem: 'tab'
};

export const TrainCard = Template.bind({});
TrainCard.args = {
   loadingItem: 'train-card'
};

export const Hero = Template.bind({});
Hero.args = {
   loadingItem: 'hero'
};

export const ButtonLight = Template.bind({});
ButtonLight.args = {
   loadingItem: 'button',
   mode: 'light'
};

export const ButtonDark = Template.bind({});
ButtonDark.args = {
   loadingItem: 'button',
   mode: 'dark'
};