/* eslint-disable @nx/enforce-module-boundaries */
import {
    BusRoutes,
 } from '@atl-transit/stations';
 import { GenericItem } from '../../models';

 
 export const getBusRoute = (item: GenericItem): BusRoutes => {
    const mappedBus = {
       key: Object.keys(item)[0],
       value: Object.values(item)[0]
    };
    const busRoute: BusRoutes = {
       routeID: parseInt(mappedBus.key),
       name: mappedBus.value as string
    };
    return busRoute;
 };
 