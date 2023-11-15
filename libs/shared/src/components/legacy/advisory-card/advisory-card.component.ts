import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { AdvisoryCard } from '../../../models/index';

@Component({
   selector: 'lib-advisory-card',
   standalone: true,
   imports: [CommonModule, DropdownComponent, ButtonComponent, CardHeaderComponent],
   templateUrl: './advisory-card.component.html',
   styleUrls: ['./advisory-card.component.scss']
})
export class AdvisoryCardComponent {
   @Input() alerts!: AdvisoryCard;
}
