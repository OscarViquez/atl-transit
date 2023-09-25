import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailArrival } from '../../models';
import { UiModes } from 'shared';
// import {getRailwayTimesAction} from '../../../../../data/hisworkin/actionRailway'

@Component({
   selector: 'lib-rail-arrival-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './rail-arrival-card.component.html',
   styleUrls: ['./rail-arrival-card.component.scss']
})
export class RailArrivalCardComponent {
   @Input() railArrival!: RailArrival[];
   @Input() systemMode!: UiModes;

   // constructor(private store: Store) {}

   // ngOnInit()
   // {
   //    if("geolocation" in navigator)
   //    {
   //       navigator.geolocation.getCurrentPosition(
   //          (position) => {
   //             this.store.dispatch(getRailwayTimesAction({longtitude: position.coords.longitude, latitude: position.coords.latitude}))
   //          },
   //          (error) => {
   //             switch(error.code)
   //             {
   //             case error.PERMISSION_DENIED:
   //                console.error("User denied the request for geolocation.");
   //                alert("Please enable location to use this service");
   //                break;
   //              case error.POSITION_UNAVAILABLE:
   //                console.error("Location information is unavailable.");
   //                alert("Please enable location to use this service");
   //                break;
   //              case error.TIMEOUT:
   //                console.error("The request to get user location timed out.");
   //                alert("Error when getting location. Please try again later");
   //                break;
   //              default:
   //                console.error("An unknown error occurred.");
   //                alert("An unknown error occurred. Please try again later");
   //             }
   //          }
   //       )
   //    }
   // }
}
