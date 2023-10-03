import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../../models';

@Component({
   selector: 'lib-header',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})



export class HeaderComponent {
   @Input() content!: PageHeader;
}
