import { Button, Header } from "shared";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { StationInterface, TrainStaion } from "stations-ui";

export class TrainUiAdapter{
   
    static MapStationsToUi(stations: StationInterface[] ): TrainStaion[] {
        const uiStations: TrainStaion[] =[]
        stations.forEach((station) => {
            const header = this.MapStationToHeader(station)
            const button: Button = {
                text: 'More details'
            }

            const trainUiStationIndividual: TrainStaion = {
                header: header,
                railArrivals: station.arrivals,
                button: button
            }

            uiStations.push(trainUiStationIndividual)
        })
        
        return uiStations
    }

    static MapStationToHeader(station: StationInterface) : Header {
        const linesCount: string[] = []

        station.arrivals.forEach((arrival) => {
            if(!linesCount.includes(arrival.color))
            {
                linesCount.push(arrival.color)
            }
        })

        let subtitle = ''

        switch(linesCount.length)
        {
            case 4: 
                subtitle = 'All lines available'
                break;
            case 3:
                subtitle = 'Three lines available'
                break;
            case 2: 
                subtitle = 'Two lines available'
                break;
            case 1: 
                subtitle = 'One line available'
                break;
            default: 
                subtitle = 'One line available'
                break;
        }

        const header: Header = {
            title: station.name,
            subtitle: subtitle 
        }

        return header
    }
}

