import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../../types';
import { UserInterface } from 'shared';

export const locateUser = createAction(
   ActionTypes.LocateUser,
   props<{ request: UserInterface }>()
);
