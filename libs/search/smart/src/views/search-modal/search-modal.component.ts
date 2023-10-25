import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHeader, HeroComponent } from 'shared';

@Component({
   selector: 'lib-search-modal',
   standalone: true,
   imports: [CommonModule, HeroComponent],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
   staticContent!: GenericHeader;
}
