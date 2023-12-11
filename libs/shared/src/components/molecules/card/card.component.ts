import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Theme, BorderColor, BorderRadius, Padding } from './types/card.types';

@Component({
   selector: 'rya-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   @Input() theme: Theme = 'light';
   @Input() spacing: Padding = 'auto';
   @Input() borderRadius: BorderRadius = 'medium';
   @Input() borderColor: BorderColor = 'default';

   classList: string[] = [];

   ngOnInit(): void {
      this.setCardStyles();
   }
   // this.addClassWithPrefix('card--radius', this.borderRadius);

   private setCardStyles(): void {
      this.classList.push('card');
      this.addClassWithPrefix('card--theme', this.theme);
      this.addClassWithPrefix('card--border', this.borderColor);
      this.addClassWithPrefix('card--radius', this.borderRadius);
      this.addClassWithPrefix('card--spacing', this.spacing);
   }

   private addClassWithPrefix(prefix: string, value?: string | boolean): void {
      if (value) {
         const className = this.setClassName([prefix, value.toString()]);
         this.classList.push(className);
      }
   }

   private setClassName(classParts: string[], delimiter = '-'): string {
      return classParts.join(delimiter);
   }
}
