import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Amenities, BusRoutes, Header, ListItemComponent } from '@atl-transit/core';
import { StationErrorMessagingComponent } from '../station-error-messaging/station-error-messaging.component';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';

@Component({
  selector: 'app-station-bus-routes',
  standalone: true,
  imports: [CommonModule, ListItemComponent, StationErrorMessagingComponent],
  template: `
    <section class="flex flex-col gap-8" id="bus-routes">
      <h2 class="text-7 font-bold">Bus Routes</h2>
      <div>
        @for (busRoute of busRoutes; track idx; let idx = $index, f = $first) {
          <core-list-item
            [content]="{
              name: busRoute.name,
              badgeLabel: busRoute.serviceOperator,
              description: busRoute.street,
            }"
            [first]="f" />
        } @empty {
          <app-station-error-messaging [content]="messaging" />
        }
      </div>
    </section>
  `,
})
export class StationBusRoutesComponent {
  @Input() busRoutes: BusRoutes[] = [];
  messaging: Header = STATION_DETAILS_ERROR_MESSAGING.noBusRoutes;
}
