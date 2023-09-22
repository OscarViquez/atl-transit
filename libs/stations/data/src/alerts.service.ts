import { Injectable } from '@angular/core';
import { AdvisoryCard } from 'libs/shared/src/models/advisorycard';
@Injectable({
  providedIn: 'root', // This registers the service in the root injector
})
export class AlertService {
    alerts: AdvisoryCard[] = [
        new AdvisoryCard("/warning.svg", 'Warning alert', "Five Points Station", 'Elevator Malfunction'),
        new AdvisoryCard("/check.svg", 'Okay alert', "Five Points Station", 'Southbound Operation'),
        new AdvisoryCard("/alert.svg", 'Red alert', "Five Points Station", 'North Springs Trains Delay')
     ]
     
  // get advisory here

}
