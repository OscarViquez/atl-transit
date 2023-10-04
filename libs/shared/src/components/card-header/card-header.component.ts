import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../models';

@Component({
   selector: 'lib-card-header',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './card-header.component.html',
   styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
   @Input() content!: Header;
}
