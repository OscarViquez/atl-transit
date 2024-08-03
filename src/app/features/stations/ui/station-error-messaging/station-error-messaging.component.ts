import { Component, Input } from '@angular/core';
import { Header } from '@atl-transit/core';

@Component({
  selector: 'app-station-error-messaging',
  standalone: true,
  template: `
    <div class="flex flex-col py-6 border-b border-b-neutral-400">
      <h2 class="text-6 font-semibold mb-4">
        {{ content.title }}
      </h2>
      <p class="text-4 font-medium text-neutral-800">
        {{ content.description }}
      </p>
    </div>
  `,
})
export class StationErrorMessagingComponent {
  @Input() content!: Header;
}
