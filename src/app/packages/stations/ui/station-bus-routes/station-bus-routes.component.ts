import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Header, InfoMessageComponent, ListItemComponent } from '@atl-transit/core';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';
import { StationDetailsBusRoute } from '../../interfaces/station-details-page.interfaces';

@Component({
  selector: 'app-station-bus-routes',
  standalone: true,
  imports: [CommonModule, ListItemComponent, InfoMessageComponent],
  template: `
    <section class="flex flex-col gap-8" id="bus-routes">
      <h2 class="text-7 font-bold">Bus Routes</h2>
      <div>
        @for (busRoute of busRoutes; track idx; let idx = $index, f = $first) {
          <core-list-item
            [content]="{
              name: busRoute.routeNumber,
              badgeLabel: busRoute.serviceOperator,
              description: busRoute.street,
            }" />
        } @empty {
          <core-info-message [content]="messaging" />
        }
      </div>
    </section>
  `,
})
export class StationBusRoutesComponent {
  @Input() busRoutes: StationDetailsBusRoute[] = [];
  messaging: Header = STATION_DETAILS_ERROR_MESSAGING.noBusRoutes;
}
