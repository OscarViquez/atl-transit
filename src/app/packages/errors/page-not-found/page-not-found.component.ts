import { Component } from '@angular/core';
import { InfoMessageComponent } from '@atl-transit/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [InfoMessageComponent],
  template: `
    <section class="flex flex-col items-center justify-center w-fullh-screen">
      <core-info-message
        [content]="{
          title: '404',
          description: 'Page not found',
        }"></core-info-message>
    </section>
  `,
})
export class PageNotFoundComponent {}
