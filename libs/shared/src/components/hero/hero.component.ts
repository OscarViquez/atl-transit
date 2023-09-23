import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderText } from '../../models/header-text.interface';
import { HeaderTextComponent } from '../header-text/header-text.component';

@Component({
   selector: 'lib-hero',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './hero.component.html',
   styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   @Input() header: HeaderText = {
      title: 'Train Arrivals',
      caption: 'View arrival times of rail lines in the area.'
   }
}
