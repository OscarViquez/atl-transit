import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderText } from '../../models/header-text.interface';

@Component({
   selector: 'lib-header-text',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './header-text.component.html',
   styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent {
   @Input() header: HeaderText = {
      title: 'Advisories',
      caption: 'and Alerts Notifications'
   }
}
