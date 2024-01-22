import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Theme, BorderColor } from './types/tile.types';
import { Padding } from '../../../models';

type BorderRadius = 'small' | 'medium' | 'large';

@Component({
   selector: 'rya-tile',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './tile.component.html',
   styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
   @Input() theme: Theme = 'light';
   // TODO: Delete this component
   @Input() spacing: Padding | 'xs'  = 'xs';
   @Input() borderRadius: BorderRadius = 'medium';
   @Input() borderColor: BorderColor = 'default';

   classList: string[] = [];

   ngOnInit(): void {
      this.setCardStyles();
   }

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
