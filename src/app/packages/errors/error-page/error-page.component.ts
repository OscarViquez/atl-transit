import { Component } from '@angular/core';
import { InfoMessageComponent } from '@atl-transit/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [InfoMessageComponent],
  template: `
    <section class="flex flex-col items-center justify-center w-full h-screen">
      <core-info-message
        [content]="{
          title: '500',
          description: 'Internal Server Error',
        }"></core-info-message>
    </section>
  `,
})
export class ErrorPageComponent {}
