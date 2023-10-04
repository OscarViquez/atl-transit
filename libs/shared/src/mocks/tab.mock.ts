import { Tab } from "../models";
import { NearestStationMock,SavedStationMock } from "./button.mock";

export const TabMock: Tab[] = [
    {
       button: NearestStationMock,
       active: true
    },
    {
       button: SavedStationMock,
       active: false
    }
 ];