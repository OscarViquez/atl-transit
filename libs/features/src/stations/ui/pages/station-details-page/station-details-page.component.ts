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
   data$!: ReturnType<StationDetailsService['initializeData']>['data$'];
   staticContentHeader!: GenericHeader;

   constructor(private service: StationDetailsService) {}

   ngOnInit(): void {
      this.data$ = this.service.initializeData().data$;
   }

   // TODO: Move to service file
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   updateStaticContentHeader(station: any): void {
      const stationName = TrainUiAdapter.MapHeaderToUiView(station?.name || '');
      this.staticContentHeader = {
         title: stationName,
         subtitle: station?.description
      };
   }
}
