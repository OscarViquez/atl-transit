import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryCard } from '../../models/advisorycard';
import { DropDownAdvisoryComponent } from '../drop-down-advisory/drop-down-advisory.component';
import { ButtonComponent } from '../button/button.component';

@Component({
   selector: 'lib-advisory-card',
   standalone: true,
   imports: [CommonModule, DropDownAdvisoryComponent, ButtonComponent],
   templateUrl: './advisory-card.component.html',
   styleUrls: ['./advisory-card.component.scss']
})
export class AdvisoryCardComponent{
   alerts: AdvisoryCard[] = [
      new AdvisoryCard("/warning.svg", 'Warning alert', "Five Points Station", 'Elevator Malfunction'),
      new AdvisoryCard("/check.svg", 'Okay alert', "Five Points Station", 'Southbound Operation'),
      new AdvisoryCard("/alert.svg", 'Red alert', "Five Points Station", 'North Springs Trains Delay')
   ]
}
