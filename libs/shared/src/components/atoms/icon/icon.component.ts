import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPathPipe } from '../../../pipes/index';
@Component({
   selector: 'rya-icon',
   standalone: true,
   imports: [CommonModule, IconPathPipe],
   template: `<img [src]="category | icon : name : mode" [alt]="name" />`,
   styleUrls: ['./icon.component.scss']
})
export class IconComponent {
   @Input() category!: string;
   @Input() name!: string;
   @Input() mode!: string | undefined;
}
