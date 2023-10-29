import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-divider',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './divider.component.html',
   styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
   @Input() label!: string;
   @Input() showDivider!: boolean
}
