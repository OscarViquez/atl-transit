// import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { userLocationAction, userTrainStations } from '../actions/user.action';
import { UserStateInterface } from '../../models';
import { userStationsSelector } from '../selectors';


export const initalUserState: UserStateInterface = {
   user: {longitude: 0, latitude: 0},
   locationFound: false,
   trainStations: [], 
   error: ''
};

export const userReducer = createReducer(
   initalUserState,
   on(userLocationAction.locateUserSuccess, (state, action) => ({
      ...state, 
      user: {longitude: action.request.longitude, latitude: action.request.latitude},
      locationFound: true
      })), 
   on(userLocationAction.locateUserFailure, (state, action) => ({
      ...state, 
      error: action.message,
      locationFound: true
   })),
   on(userTrainStations.userStationMappingSuccess, (state, action) => ({
      ...state, 
      trainStations : action.stations
   }))
      
 );

export function reducers(state: UserStateInterface, action: Action) {
   return userReducer(state, action);
}
