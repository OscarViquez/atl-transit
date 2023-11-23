import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { amenitiesByIdSelector, AppStateInterface, generalStationByIdSelector, stationGeneralSelector, TrainUiAdapter } from '@atl-transit/global-state';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StationCardComponent, StationErrorMessageComponent } from '../../components';
import { TrainStaion, GenericTrainErrorMocks } from '../../../shared';

// * LIBS IMPORTS */
import { HeroMock, TabMock, HeroComponent, TabComponent, LoadingSkeletonComponent, GenericHeader } from '@atl-transit/shared';

@Component({
   selector: 'lib-station-details-page',
   standalone: true,
   imports: [
      CommonModule,
      StationErrorMessageComponent,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './station-details-page.component.html',
   styleUrls: ['./station-details-page.component.scss']
})
export class StationDetailsPageComponent implements OnInit{
   station$ = this.store.select(generalStationByIdSelector);
   staticContentHeader! : GenericHeader;
   amenities$ = this.store.select(amenitiesByIdSelector);

   constructor(
      private store: Store<AppStateInterface>,
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

   this.station$.subscribe((station) => {

      const red = station?.description.search('red');
      const blue = station?.description.search('blue');
      const green = station?.description.search('green');
      const gold = station?.description.search('gold');
      const all = station?.description.search('all');
      
      const stationName = TrainUiAdapter.MapHeaderToUiView(station?.name || '');

      this.staticContentHeader = {
         title: stationName|| '',
         subtitle: station?.description
      }

   })

   }

}
