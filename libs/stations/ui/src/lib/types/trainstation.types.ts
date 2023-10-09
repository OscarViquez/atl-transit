import { RailArrival } from "../models";


export interface StationInterface {
    name: string;
    description?: string;
    latitude: number;
    longitude: number;
    contactnumber?: string;
    connectingbusroutes?: BusRoutes[];
    ammenities1?: string;
    ammenities2?: string;
    ammenities3?: string;
    ammenities4?: string;
    arrivals: RailArrival[];
}

export interface TrainInterface {
    train_id: number;
    currentStation: string;
    nextStation: string;
}

export interface BusRoutes {
    routeID: number;
    name: string;
}

export interface JsonStationInterface {
    name: string;
    longitude: string;
    latitude: string;
    amenities1?: string;
    amenities2?: string;
    amenities3?: string;
    amenities4?: string;
    contactnumber: string;
    connectingbusroutes: BusRoutes[];
}