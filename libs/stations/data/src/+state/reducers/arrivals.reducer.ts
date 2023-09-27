import { Action, createReducer, on } from '@ngrx/store';
import { MartaArrivalWithLoaded } from '../../models';
import * as ArrivalActions from '../actions/arrivals.action';

export const initialState: MartaArrivalWithLoaded = {
   arrivals: [],
   isLoaded: false
};

export const arrivalsReducer = createReducer(
   initialState,
   on(ArrivalActions.loadRailArrival, (state) => ({
      ...state
   })),
   on(ArrivalActions.loadRailArrivalSuccess, (state, { request: content }) => {
      return {
         ...state,
         isLoaded: true,
         content
      };
   }),

   // TODO: Need to create an Error Interface, Entity Mapping for this to work
   on(ArrivalActions.loadRailArrivalFailure, (state, { request: content }) => {
      // * Console log if Request fails
      console.error('Error loading data', content);
      return {
         ...state,
         isLoaded: true,
         content
      };
   })
);

export function reducer(state = initialState, action: Action) {
   return arrivalsReducer(state, action);
}
