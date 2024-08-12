import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Save data to local storage
   * @param key - Name of key, that would used to identify and create a place to save data in local storage
   * @param value - The data that you want to save in local storage
   * @example saveToLocalStorage('savedStations', ["Lenox", "Dunwoody"]);
   *
   * When it is stored in local storage, it will look like this:
   *
   * ```
   * {
   *  "savedStations": ["Lenox", "Dunwoody"]
   * }
   * ```
   */
  saveToLocalStorage<T>(key: string, value: T): void {
    const existingData = this.getFromLocalStorage<T[]>(key) || [];
    existingData.push(value);
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  /**
   * Remove data from local storage
   * @param key - Name of key, that would used to identify and create a place to save data in local storage
   * @param item - The data that you want to remove from local storage
   * @example
   * removeFromLocalStorage('savedStations', 'Dunwoody');
   *
   * Afterwards, in local storage, it will look like this:
   *
   * ```
   * {
   * "savedStations": ["Lenox"]
   * }
   *```
   */
  removeFromLocalStorage<T>(key: string, item: T): void {
    const items = this.getFromLocalStorage<T[]>(key);
    const updatedItems = items.filter(i => i !== item);
    localStorage.setItem(key, JSON.stringify(updatedItems));
  }

  /**
   * Get data from local storage
   * @param key - Name of key, that would used to identify and create a place to save data in local storage
   * @example
   * getFromLocalStorage<string[]>('savedStations');
   *
   * This will return an array of saved stations
   *
   * ```
   * ["Lenox", "Dunwoody"]
   * ```
   */
  getFromLocalStorage<T>(key: string): T {
    const item = localStorage.getItem(key);
    if (!item) {
      return [] as unknown as T;
    }
    return JSON.parse(item) as T;
  }
}
