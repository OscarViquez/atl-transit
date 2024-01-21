import { ButtonDirective } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Directives/Button',
   component: ButtonDirective,
   decorators: [moduleMetadata({ imports: [ButtonDirective] })],
   parameters: {
      docs: {
         description: {
            component: ''
         }
      }
   }
} as Meta<ButtonDirective>;

type Story = StoryObj<ButtonDirective>;

export const Default: Story = {
   render: () => ({
      template: `
      <div ryaButton>
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='subtle' >
         <img src="http://tinyurl.com/k6p5sbvf" alt="icon" />
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='primary'>
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='subtle' [popStyle]="true">
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='subtle' [popStyle]="true">
         <img src="http://tinyurl.com/k6p5sbvf" alt="icon" />
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='primary' [popStyle]="true">
         Some Text Here
      </div>

      <br>
      <br>

      <div ryaButton appearance='subtle' [popStyle]="true">
         <img src="http://tinyurl.com/k6p5sbvf" alt="icon" />
      </div>


      <br>
      <br>

      <div ryaButton [popStyle]="true">
         <img src="http://tinyurl.com/k6p5sbvf" alt="icon" />
      </div>

      `
   })
};
