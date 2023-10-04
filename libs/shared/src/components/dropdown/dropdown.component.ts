import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from '../../models';

@Component({
   selector: 'lib-dropdown',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
   @Input() content!: Dropdown
}
