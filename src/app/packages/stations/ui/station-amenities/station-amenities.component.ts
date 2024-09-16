import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Header, InfoMessageComponent, ListItemComponent } from '@atl-transit/core';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';
import { StationDetailsAmenity } from '../../interfaces/station-details-page.interfaces';

@Component({
  selector: 'app-station-amenities',
  standalone: true,
  imports: [CommonModule, ListItemComponent, InfoMessageComponent],
  template: `
    <section class="flex flex-col gap-8" id="amenities">
      <h2 class="text-7 font-bold">Amenities</h2>
      <div>
        @for (amenity of amenities; track idx; let idx = $index, f = $first) {
          <core-list-item
            [content]="{
              name: amenity.name,
            }" />
        } @empty {
          <core-info-message [content]="messaging" />
        }
      </div>
    </section>
  `,
})
export class StationAmenitiesComponent {
  @Input() amenities: StationDetailsAmenity[] = [];
  messaging: Header = STATION_DETAILS_ERROR_MESSAGING.noAmenities;
}
