import { Component, Input } from '@angular/core';
import { Header } from '../../models';

@Component({
  selector: 'core-info-message',
  standalone: true,
  template: `
    <div class="text-center mt-12 animate-fade-up">
      <!-- <div class="mx-auto w-[6rem] h-[6rem] bg-pastelBlue bg-opacity-10 rounded-md mb-6"></div> -->
      <!-- TODO: Create assets for these different state images. e.g have an image that appears for errors, img for empty states, etc  -->
      <h2 class="text-6 font-medium mb-4">
        {{ content.title }}
      </h2>
      <p class="text-4 font-medium text-neutral-800">
        {{ content.description }}
      </p>
    </div>
  `,
})
export class InfoMessageComponent {
  @Input() content: Header = {} as Header;
}
