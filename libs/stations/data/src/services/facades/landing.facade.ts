import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as actions from '../../+state/actions/arrivals.action';
import { selectArrivalsResponse } from '../../+state/selectors/arrivals.selector';

@Injectable({
  providedIn: 'root'
})
export class Facade {
  constructor( private readonly store: Store) {
  }

  arrivalData$ = this.store.pipe(select(selectArrivalsResponse))


  initializePageRender() {
    this.store.dispatch(actions.loadRailArrival());
  }
}
