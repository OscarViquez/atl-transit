import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class StorageService {
   constructor() {}
   // TODO: This is just a sample implementation,
   setItem(key: string, value: string): void {
      localStorage.setItem(key, JSON.stringify(value));
   }

   getItem<T>(key: string): T {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
   }

   // ... other storage methods (removeItem, clear, etc.)
}
