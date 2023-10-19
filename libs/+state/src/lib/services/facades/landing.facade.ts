// /* eslint-disable @nx/enforce-module-boundaries */
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { RailArrival, TrainStaion } from 'libs/stations/ui/src/lib/models';
// import { MartaArrivalResponse } from '../../models';

// import { DataService } from '../data.service';
// import { StationInterface } from 'stations-ui';
// import { UserService } from '../user.service';
// import { HttpClient } from '@angular/common/http';
// import { lastValueFrom, Observable, Observer } from 'rxjs';

// import { TrainArrivalAdapter, TrainUiAdapter, UserAdapter } from '../adapters/';
// import { JsonStationInterface, BusRoutes } from 'libs/stations/ui/src/lib/types';
// import { locateUser, locateUserFailure, locateUserSuccess } from '../../+state/actions/user.action';
// import { LocationService } from '../location.service';


// @Injectable({
//    providedIn: 'root'
// })
// export class Facade {
//    constructor(
//       private readonly store: Store,
//       private dataService: DataService,
//       private httpClient: HttpClient,
//       private user: UserService,
//       private locationService: LocationService
//    ) {}
   
//    arrivalData!: MartaArrivalResponse[];
//    railArrivalData: RailArrival[] = [];
//    allStations: StationInterface[] = [];
//    uiStations: TrainStaion[] = []
   
//    //arrivalData$ = this.store.pipe(select(selectArrivalsResponse))
//    async initializeUserData() : Promise<any> {
//       //this.store.dispatch(actions.loadRailArrival());
//         try {
//           this.locationService.getUserCoordinations().subscribe((userData) => {
//             this.user.currentUser = userData  
            
//             if(!!userData)
//             {
//               this.store.dispatch(locateUser({request: userData}))
//               this.store.dispatch(locateUserSuccess())
             
    
//             }
//           })

//           return this.renderPage()
//         } catch (error) {
//            console.log('Eror' + error);
//         }
//       }
     

//    async renderPage(): Promise<boolean> {
//     const stationResponse = lastValueFrom(await this.httpClient.get<JsonStationInterface[]>(
//        '/assets/json/marta.trains.json'
//     ))
//     const currentStations = TrainArrivalAdapter.MapJsonToStationInterface(await stationResponse)
//     this.allStations = UserAdapter.MapClosestStationToUser(this.user.currentUser, currentStations);

//     const arrivalResponse = lastValueFrom(await this.dataService.getArrivalTimes())
//     this.arrivalData = await arrivalResponse
    
//     this.arrivalData.forEach((arrival) => {
//           const mappedObject = TrainArrivalAdapter.MapToRailArrival(arrival);
//           this.railArrivalData.push(mappedObject);
//    });

//     this.allStations = TrainArrivalAdapter.MapRailArrivalGroups(this.railArrivalData, this.allStations)
//    this.uiStations = TrainUiAdapter.MapStationsToUi(this.allStations)

//     return this.uiStations.length> 0 ? true: false;
//    }

// }


