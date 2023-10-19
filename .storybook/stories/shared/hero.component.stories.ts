import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { HeroComponent, HeroMock } from 'shared';

export default {
   title: 'Components/Atoms/Hero',
   component: HeroComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<HeroComponent>;

const Template: Story<HeroComponent> = (args: HeroComponent) => ({
   component: HeroComponent,
   props: args
});

export const Hero = Template.bind({});
Hero.args = {
   content: HeroMock
};
