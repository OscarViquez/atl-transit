import { CardDirective } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Directives/Card',
   component: CardDirective,
   decorators: [moduleMetadata({ imports: [CardDirective] })],
   parameters: {
      docs: {
         description: {
            component: ''
         }
      }
   }
} as Meta<CardDirective>;

type Story = StoryObj<CardDirective>;

export const Default: Story = {
   render: () => ({
      template: `
      <span ryaCard [shadow]="false">Some Text Here</span>
      <br>
      <span ryaCard direction="column" gap="large">
         <div ryaCard >Some Text Here</div>
         <div ryaCard >Some Text Here</div>
      </span>
      `
   })
};

export const TileCard: Story = {
   render: () => ({
      template: `
      <span ryaCard borderRadius="medium" direction="row" gap="large" [border]="true" [shadow]="false">
         <div ryaCard [shadow]="false" >Some Text Here</div>
         <div ryaCard [shadow]="false">Some Text Here</div>
      </span>

      <br>

      <span ryaCard borderRadius="medium" direction="column" [border]="true" [shadow]="false">
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
         <div ryaCard [border]="true" [shadow]="false" >Some Text Here</div>
      </span>
      `
   })
};
