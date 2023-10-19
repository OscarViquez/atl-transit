// import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { userLocationAction } from '../actions/user.action';
import { UserStateInterface } from '../../models';
import { TrainUiAdapter } from '../../services/adapters';


export const initalUserState: UserStateInterface = {
   user: {longitude: 0, latitude: 0},
   locationFound: false,
   trainStations: [], 
   error: ''
};

export const locationReducer = createReducer(
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
   }))
      
 );

export function reducers(state: UserStateInterface, action: Action) {
   return locationReducer(state, action);
}
