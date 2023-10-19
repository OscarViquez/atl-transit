import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserActionTypes } from '../../types';
import { TrainStaion } from 'stations-ui';
import { User } from '../../models';

export const userLocationAction = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.LocateUserSuccess] : props<{ request: User }>(),
      [UserActionTypes.LocateUserFailure] : props<{ message: string }>()
   }
})

export const userTrainStations = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.StationUserSuccess] : props<{ stations: TrainStaion[] }>(),
      [UserActionTypes.StationUserFailure] : props<{ message: string }>(),
   }
})