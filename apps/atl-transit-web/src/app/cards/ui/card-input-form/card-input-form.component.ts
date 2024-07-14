import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-card-input-form',
   standalone: true,
   imports: [CommonModule],
   template: `
      <section class="flex flex-col gap-8">
         <div class="flex flex-col gap-2">
            <h1 class="text-7 font-bold">{{ title }}</h1>
            <p class="text-4 font-medium text-neutral-800">
               Please enter the 20-digit serial number found on the back of your transit card.
            </p>
         </div>

         <div class="input input-disabled relative">
            <input type="text" class="block" placeholder="Input Value" />
            <label>Serial Number</label>
         </div>
      </section>
   `
})
export class CardInputFormComponent {
   @Input() title!: string;
}
