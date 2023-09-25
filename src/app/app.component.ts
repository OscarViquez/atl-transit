import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UserInterface } from 'shared';
import { Observable } from 'rxjs';
import { AppModule, locationFoundSelector } from 'stations-data';
// TODO: Imports from Actions Can not be in any component file. Only Service files
import { locateUser } from 'libs/stations/data/src/+state/actions/user.action';

@Component({
   standalone: true,
   imports: [RouterModule, AppModule],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'atl-transit';
   //  We will need to put this into a Facade File
   locationFound$!: Observable<boolean>;

   constructor(private store: Store) {}

   ngOnInit(): void {
      this.initalizeValues();
      if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const currentUser: UserInterface = {
                  longitude: position.coords.latitude,
                  latitude: position.coords.longitude
               };

               this.store.dispatch(locateUser({ request: currentUser }));
               console.log(locateUser({ request: currentUser }));
            },
            (error) => {
               switch (error.code) {
                  case error.PERMISSION_DENIED:
                     console.error('User denied the request for geolocation.');
                     alert('Please enable locatio services to use this application');
                     break;
                  case error.POSITION_UNAVAILABLE:
                     console.error('Location information is unavailable.');
                     alert('Please enable locatio services to use this application');
                     break;
                  case error.TIMEOUT:
                     console.error('The request to get user location timed out.');
                     alert('An unknown error occurred. Please refresh the page');
                     break;
                  default:
                     console.error('An unknown error occurred.');
                     alert('An unknown error occurred. Please refresh the page');
               }
            }
         );
      } else {
         console.error('Geolocation is not available in this browser.');
      }
   }

   initalizeValues(): void {
      // this.locationFound$ = this.store.pipe(select(locationFoundSelector))
   }
}
