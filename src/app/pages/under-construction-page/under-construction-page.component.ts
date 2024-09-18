import { Component } from '@angular/core';
import { InfoMessageComponent } from '@atl-transit/core';

@Component({
  selector: 'app-under-construction-page',
  standalone: true,
  imports: [InfoMessageComponent],
  template: `
    <section class="flex flex-col items-center justify-center w-full h-screen">
      <core-info-message
        [content]="{
          title: 'Under Construction',
          description: 'This page is under construction.',
        }"></core-info-message>
    </section>
  `,
})
export class UnderConstructionPageComponent {}
