import {createAction, props} from '@ngrx/store'
import { ActionTypes } from './actionTypes'

export const getRailwayTimesAction = createAction (
    ActionTypes.GetRailwayTimes, 
    props<{longtitude: number, latitude: number}>()
)