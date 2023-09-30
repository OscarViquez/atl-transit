import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RailArrival } from 'libs/stations/ui/src/lib/models';
import * as actions from '../../+state/actions/arrivals.action';
import { selectArrivalsResponse } from '../../+state/selectors/arrivals.selector';
import { MartaArrivalResponse } from '../../models';
import { DataService } from '../data.service';
import { AdapterService } from '../adapters/train-arrivals.adapter';

@Injectable({
  providedIn: 'root'
})
export class Facade {
  arrivalData!: MartaArrivalResponse[]
  railArrivalData: RailArrival[] = []
  constructor( private readonly store: Store, private dataService: DataService) {
  }

  //arrivalData$ = this.store.pipe(select(selectArrivalsResponse))


  async initializePageRender() : Promise<boolean>{
    //this.store.dispatch(actions.loadRailArrival());

    try {
    await this.dataService.getArrivalTimes().subscribe((item) => {
      this.arrivalData = item;

      
      this.arrivalData.forEach((arrival) => {
        let mappedObject = AdapterService.MapToRailArrival(arrival)
        this.railArrivalData.push(mappedObject)
       })

       if(this.railArrivalData.length > 0) {return true}
       else {return false}
    })

    return true // this logic dont make sense help me
  }
  catch(error)
  {
    console.log(error)
    return false;
  }
}
}
