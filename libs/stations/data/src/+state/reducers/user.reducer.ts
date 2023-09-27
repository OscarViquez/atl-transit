// import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { locateUser } from '../actions/user.action';
import { UserStateInterface } from '../../interfaces';

const initalState: UserStateInterface = {
   locationFound: false
};

const locationReducer = createReducer(
   initalState,
   on(locateUser, (state: UserStateInterface) => ({
      ...state,
      locationFound: true
   }))
);

export function reducers(state: UserStateInterface, action: Action) {
   return locationReducer(state, action);
}
