import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { LoadingSkeletonComponent } from 'shared';

export default {
   title: 'Components/Atoms/Skeleton Loader',
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


export const TabLoading = Template.bind({});
TabLoading.args = {
   loadingItem: 'tab'
};

export const TrainCardLoading = Template.bind({});
TrainCardLoading.args = {
   loadingItem: 'train-card'
};

export const HeroLoading = Template.bind({});
HeroLoading.args = {
   loadingItem: 'hero'
};

export const ButtonLightLoading = Template.bind({});
ButtonLightLoading.args = {
   loadingItem: 'button',
   mode: 'light'
};

export const ButtonDarkLoading = Template.bind({});
ButtonDarkLoading.args = {
   loadingItem: 'button',
   mode: 'dark'
};