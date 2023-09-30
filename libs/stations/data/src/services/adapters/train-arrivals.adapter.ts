import { RailArrival } from 'libs/stations/ui/src/lib/models'
import { MartaArrivalResponse } from '../../models';
export class AdapterService
{
    
    static MapToRailArrival(item: MartaArrivalResponse) : RailArrival
    {
        let result = {
            direction: item.DESTINATION,
            destination: item.DESTINATION,
            description: 'test',
            color: item.LINE.toLowerCase(),
            arrivalTime: item.NEXT_ARR
        }

        return result;
    }
}
