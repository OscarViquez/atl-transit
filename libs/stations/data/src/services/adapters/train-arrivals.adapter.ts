import { RailArrival } from 'libs/stations/ui/src/lib/models'
import { MartaArrivalResponse } from '../../models';
import { JsonStationInterface, RailDirection } from 'libs/stations/ui/src/lib/types';
import {StationInterface} from 'libs/stations/ui/src/lib/types';
import { arrivalReducer } from '../../+state/reducers/arrivals.reducer';
import { Facade } from '../facades/landing.facade';
export class AdapterService
{

    static MapToRailArrival(item: MartaArrivalResponse) : RailArrival
    {
        let direction: RailDirection = 'North'

        switch(item.DIRECTION)
        {
            case 'N':
             direction = 'North'
                break;
            case 'S':
                direction = 'South'
                break;
            case 'W':
                direction = 'West'
                break;
            case 'E':
                direction = 'East'
                break;
        }
        let result: RailArrival = {
            station: item.STATION,
            direction: direction,
            destination: item.DESTINATION,
            description: direction + 'bound',
            color: item.LINE.toLowerCase(),
            arrivalTime: item.WAITING_TIME
        }

        return result;
    }

    static MapJsonToStationInterface(allStations: JsonStationInterface[]) : StationInterface[] {
        return []
    }

     static MapRailArrivalGroups(arrival: RailArrival[], currentStations: StationInterface[] ) : StationInterface[] {


        arrival.forEach((trainArrival) => {
            
            // step one: define the looking we are looking for 
            let locationToFind = trainArrival.station

            //step two: loop through the stations and find the station we want


            //step three: set the arrivals to that station 



            
        
        })

        return []
    }
}
