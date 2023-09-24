import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from '../../models';

@Component({
   selector: 'lib-dropdown',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './drop-down-advisory.component.html',
   styleUrls: ['./drop-down-advisory.component.scss']
})
export class DropDownAdvisoryComponent {
   @Input() content!: Dropdown
}
