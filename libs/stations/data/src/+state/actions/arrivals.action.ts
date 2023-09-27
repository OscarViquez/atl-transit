import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../../types';
import { MartaArrivalResponse } from '../../interfaces';

export const loadRailArrival = createAction(ActionTypes.GET_RAIL_ARRIVALS);

export const loadRailArrivalSuccess = createAction(
   ActionTypes.GET_RAIL_ARRIVALS_SUCCESS,
   props<{ request: MartaArrivalResponse[] }>()
);

export const loadRailArrivalFailure = createAction(
   ActionTypes.GET_RAIL_ARRIVALS_FAILURE,
   props<{ request: MartaArrivalResponse[] }>()
);
