/* eslint-disable @nx/enforce-module-boundaries */
import {
   HeroComponent,
   TabComponent,
   LoadingSkeletonComponent,
   GenericHeader
} from '@atl-transit/shared';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainUiAdapter } from '@atl-transit/global-state';
import { StationCardComponent } from '../../components';
import { StationDetailsService } from '../../../services/station-details/station-details.service';
import { Observable } from 'rxjs';


@Component({
   selector: 'rya-station-details-page',
   standalone: true,
   imports: [
      CommonModule,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './station-details-page.component.html',
   styleUrls: ['./station-details-page.component.scss']
})
export class StationDetailsPageComponent implements OnInit {
   //data$!: Observable<StationDetailsData>
   staticContentHeader!: GenericHeader;


   constructor(private service: StationDetailsService) {}

   ngOnInit(): void {
      
   }

   // TODO: Move to service file
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   updateStaticContentHeader(station: any): GenericHeader {
      const stationName = TrainUiAdapter.MapHeaderToUiView(station?.name || '');
      return {
         title: stationName,
         subtitle: station?.description
      };
   }
}
