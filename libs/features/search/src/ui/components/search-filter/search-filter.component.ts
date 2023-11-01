import { Component, ElementRef, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-search-filter',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './search-filter.component.html',
   styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnChanges {
   @ViewChild('chipInput') chipInput!: ElementRef;

   constructor(private renderer: Renderer2) {}

   ngOnChanges(): void {
      this.renderer.listen(this.chipInput.nativeElement, 'change', (event: Event) => {
         const input = event.target as HTMLInputElement;
         const chip = input.closest('.chip');
         if (input.checked) {
            this.renderer.setStyle(chip, 'background-color', '#007bff');
            this.renderer.setStyle(chip, 'color', '#fff');
         } else {
            this.renderer.removeStyle(chip, 'background-color');
            this.renderer.removeStyle(chip, 'color');
         }
      });
   }
}
