import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  constructor(private storageService: LocalStorageService) {}

  saveStationToLocalStorage(stationName: string): void {
    this.storageService.saveToLocalStorage<string>('savedStations', stationName);
  }

  removeStationFromLocalStorage(stationName: string): void {
    this.storageService.removeFromLocalStorage<string>('savedStations', stationName);
  }
}
