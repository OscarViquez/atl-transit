import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryCard } from '../../models/advisorycard';
import { DropDownAdvisoryComponent } from '../drop-down-advisory/drop-down-advisory.component';

@Component({
   selector: 'lib-advisory-card',
   standalone: true,
   imports: [CommonModule, DropDownAdvisoryComponent],
   templateUrl: './advisory-card.component.html',
   styleUrls: ['./advisory-card.component.scss']
})
export class AdvisoryCardComponent implements OnInit{
   alerts: AdvisoryCard[] = [
      new AdvisoryCard("/warning.svg", 'Warning alert', "Five Points Station", 'Elevator Malfunction'),
      new AdvisoryCard("/check.svg", 'Okay alert', "Five Points Station", 'Southbound Operation'),
      new AdvisoryCard("/alert.svg", 'Red alert', "Five Points Station", 'North Springs Trains Delay')
   ]

   constructor(){}


   ngOnInit(): void {
      
     
   }

}
