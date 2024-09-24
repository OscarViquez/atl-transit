import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import {
  BusFeatureState,
  BusStoreService,
} from '../../../../data-access/store/bus/bus-store.service';
import { Observable } from 'rxjs';
import { FacadeService } from '@atl-transit/data-access';

@Component({
  selector: 'app-bus-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="pt-[120px]">bus-page works!</p>
    <div *ngIf="facade.busFeatureState$ | async as state">
      <p>Bus Feed: {{ state.martaGtfsFeedResponse?.header?.gtfsRealtimeVersion }}</p>
    </div>
  `,
  styles: ``,
})
export class BusPageComponent implements OnInit {
  facade = inject(FacadeService);

  ngOnInit(): void {
    this.facade.getBusFeatureState();
  }
}
