import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveToLocalStorage<T>(key: string, value: T): void {
    const existingData = this.getFromLocalStorage<T[]>(key) || [];
    existingData.push(value);
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  removeFromLocalStorage<T>(key: string, item: T): void {
    const items = this.getFromLocalStorage<T[]>(key);
    const updatedItems = items.filter(i => i !== item);
    localStorage.setItem(key, JSON.stringify(updatedItems));
  }

  getFromLocalStorage<T>(key: string): T {
    const item = localStorage.getItem(key);
    if (!item) {
      return [] as unknown as T;
    }
    return JSON.parse(item) as T;
  }
}
