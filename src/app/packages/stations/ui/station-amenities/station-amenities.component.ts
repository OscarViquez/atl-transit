import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Amenities, Header, ListItemComponent } from '@atl-transit/core';
import { StationErrorMessagingComponent } from '../station-error-messaging/station-error-messaging.component';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';

@Component({
  selector: 'app-station-amenities',
  standalone: true,
  imports: [CommonModule, ListItemComponent, StationErrorMessagingComponent],
  template: `
    <section class="flex flex-col gap-8" id="amenities">
      <h2 class="text-7 font-bold">Amenities</h2>
      <div>
        @for (amenity of amenities; track idx; let idx = $index, f = $first) {
          <core-list-item
            [content]="{
              name: amenity.name,
              badgeLabel: amenity?.costType,
              description: amenity.description,
            }"
            [first]="f" />
        } @empty {
          <app-station-error-messaging [content]="messaging" />
        }
      </div>
    </section>
  `,
})
export class StationAmenitiesComponent {
  @Input() amenities: Amenities[] = [];
  messaging: Header = STATION_DETAILS_ERROR_MESSAGING.noAmenities;
}
