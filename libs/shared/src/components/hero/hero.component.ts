import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../models';

@Component({
   selector: 'lib-hero',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './hero.component.html',
   styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   @Input() hero!: Header;
}
