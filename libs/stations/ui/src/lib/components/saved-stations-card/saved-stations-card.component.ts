import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-saved-stations-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './saved-stations-card.component.html',
   styleUrls: ['./saved-stations-card.component.scss']
})
export class SavedStationsCardComponent {
   // TODO: need to find a better way to store this static contents
   @Input() errorContent: {
      title: string;
      message: string;
   } = {
      title: '',
      message: ''
   };
}
