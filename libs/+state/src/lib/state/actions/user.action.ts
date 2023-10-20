import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserActionTypes } from '../../types';
import { TrainStaion } from 'stations-ui';
import { User } from '../../models';
import { empty } from 'rxjs';

export const userLocationAction = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.LocateType] : emptyProps(),
      [UserActionTypes.LocateUserSuccess] : props<{ request: User }>(),
      [UserActionTypes.LocateUserFailure] : props<{ message: string }>()
   }
})



export const userTrainStations = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.StationType] : emptyProps(),
      [UserActionTypes.StationUserSuccess] : props<{ stations: TrainStaion[] }>(),
      [UserActionTypes.StationUserFailure] : props<{ message: string }>(),
   }
})