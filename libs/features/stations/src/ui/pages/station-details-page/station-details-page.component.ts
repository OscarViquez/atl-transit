import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStateInterface, stationGeneralSelector } from 'global-state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'lib-station-details-page',
   standalone: true,
   imports: [
      CommonModule,
   ],
   templateUrl: './station-details-page.component.html',
   styleUrls: ['./station-details-page.component.scss']
})
export class StationDetailsPageComponent implements OnInit{
station$ = this.store.select(stationGeneralSelector)

   constructor(
      private store: Store<AppStateInterface>,
      private route: Router,
      private activatedRoute : ActivatedRoute
   ){}

   ngOnInit(): void {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const dateString = "T23:42:00.000Z";
   const dateObject = new Date(formattedDate + dateString);

   console.log(dateObject);
   console.log(this.activatedRoute)
   }
}
