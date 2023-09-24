 import { createAction, props } from '@ngrx/store';
 import { UserInterface} from '../../../../../shared/src/types/user.types'
 import { ActionTypes } from './actionTypes';

 export const locateUser = createAction(
    ActionTypes.LocateUser,
    props<{request: UserInterface}>()
 );

