/* eslint-disable @nx/enforce-module-boundaries */

import { StationInterface } from "stations-ui";
import { User } from "../../models/user";
import { Facade } from "../facades/landing.facade";
import { UserService } from "../user.service";

export class UserAdapter {

    static MapClosestStationToUser(user: User, stations: StationInterface[]) : StationInterface[] {
        let stationDistances: {name: string, distance: number}[] = []

        stations.forEach((station) => {
            const stationLocation = {
                latitude: station.latitude,
                longitude: station.longitude
            }
            const userLocation = {
                latitude: user.latitude,
                longitude: user.longitude
            }
            const distanceBetweenUserAndStation = this.LocationTracker(userLocation, stationLocation)
            
            const stationInformation = {
                name: station.name, 
                distance: distanceBetweenUserAndStation
            }
            stationDistances.push(stationInformation)
        })


        

        return this.MappingStationsLocation(stationDistances, stations)

    }


    static LocationTracker(locationUser: {latitude: number, longitude: number}, locationStation: {latitude: number, longitude: number}) {
        const earthRadiusKm: number = 6371;

        const latitudeDegrees = this.DegreesToRadians(locationUser.latitude - locationStation.latitude)
        const longitudeDegrees = this.DegreesToRadians(locationUser.longitude - locationStation.longitude)

        const a: number =
        Math.sin(latitudeDegrees / 2) * Math.sin(latitudeDegrees / 2) +
        Math.cos(this.DegreesToRadians(locationStation.latitude)) * Math.cos(this.DegreesToRadians(locationUser.latitude)) *
        Math.sin(longitudeDegrees / 2) * Math.sin(longitudeDegrees / 2);

        const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        const distance: number = earthRadiusKm * c;

        return this.CrustDifference(distance)
    }

    static DegreesToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    static CrustDifference(circleDifferce: number): number
    {
        // in km
        const difference = 6378*Math.sin(circleDifferce/6378) / Math.sin( (Math.PI-(circleDifferce/6378)) / 2 )
        
        return difference
    }


    static MappingStationsLocation(distancesStations: {name: string, distance: number}[], stations: StationInterface[]) : StationInterface[] {
        distancesStations.sort((a, b) => a.distance - b.distance)

        let allStations: StationInterface[] = []

        distancesStations.forEach((item)=> {
            let index = stations.findIndex((station) => station.name === item.name)
            allStations.push(stations[index])
        })

        return allStations
    }
}
