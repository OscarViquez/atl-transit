import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../models/index';
import { BadgeDirective } from '../../directives';

type HeaderType = 'page' | 'header' | 'sub-header' | 'section' | 'card';

@Component({
   selector: 'rya-header',
   standalone: true,
   imports: [CommonModule, BadgeDirective],
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   @Input() content!: Header;
   @Input() headerType: HeaderType = 'header';
}
