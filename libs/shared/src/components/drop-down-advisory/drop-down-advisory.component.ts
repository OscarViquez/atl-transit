import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryCard } from '../../models/advisorycard';

@Component({
   selector: 'lib-drop-down-advisory',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './drop-down-advisory.component.html',
   styleUrls: ['./drop-down-advisory.component.scss']
})
export class DropDownAdvisoryComponent {
   @Input() imgPath!: string;
   @Input() imgAlt!: string;
   @Input() title!: string;
   @Input() sub!: string;
}
