import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserStateInterface } from "../../types";
import { AppStateInterface } from "../../types/app.states.types";

export const userFeatureSelector = createFeatureSelector<AppStateInterface, UserStateInterface>('user')

export const locationFoundSelector = createSelector(userFeatureSelector, 
    (userState: UserStateInterface) => userState.locationFound)