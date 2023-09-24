import { state } from "@angular/animations";
import { createReducer, on, Action } from "@ngrx/store";
import {UserStateInterface} from 'libs/stations/data/src/types/user.state'
import { locateUser } from "../actions/user.action";

const initalState: UserStateInterface = {
    locationFound: false
}

const locationReducer = createReducer(initalState, on(locateUser, (state: UserStateInterface) => ({
    ...state, 
    locationFound: true
})))

export function reducers(state: UserStateInterface, action: Action)
{
    return locationReducer(state, action)

}