import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryCard } from '../../models/advisory-card.interface';
import { DropDownAdvisoryComponent } from '../drop-down-advisory/drop-down-advisory.component';
import { ButtonComponent } from '../button/button.component';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
   selector: 'lib-advisory-card',
   standalone: true,
   imports: [CommonModule, DropDownAdvisoryComponent, ButtonComponent, CardHeaderComponent],
   templateUrl: './advisory-card.component.html',
   styleUrls: ['./advisory-card.component.scss']
})
export class AdvisoryCardComponent {
   @Input() alerts!: AdvisoryCard;
}
