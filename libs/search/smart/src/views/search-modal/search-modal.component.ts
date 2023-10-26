import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent, GenericHeader, HeroComponent } from 'shared';
import { SearchBarComponent } from '@search-ui';

@Component({
   selector: 'lib-search-modal',
   standalone: true,
   imports: [CommonModule, HeroComponent, SearchBarComponent, DividerComponent],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
   staticContent!: GenericHeader;
   // TODO: remove this later
   headerText = { title: 'Where to?' };
}
