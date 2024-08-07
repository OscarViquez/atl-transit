import { Component, Input } from '@angular/core';
import { Header } from '../../models';

@Component({
  selector: 'core-info-message',
  standalone: true,
  imports: [],
  template: `
    <div class="text-center mt-12 animate-fade-up">
      <h2 class="text-6 font-semibold mb-4">
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
