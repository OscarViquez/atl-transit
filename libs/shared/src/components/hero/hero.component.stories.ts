import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { HeroComponent } from './hero.component';
import { HeroMock } from '../../mocks';

export default {
   title: 'shared/Hero',
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

export const Default = Template.bind({});
Default.args = {
   hero: HeroMock
};
