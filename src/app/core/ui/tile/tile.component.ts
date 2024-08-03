import { Component } from '@angular/core';

@Component({
  selector: 'core-tile',
  standalone: true,
  imports: [],
  template: `
    <button
      class="tile  focus:outline focus:outline-white focus:outline-2 focus:shadow-focused-state">
      <p class="block text-5 font-medium max-w-[12ch]">
        <ng-content>
          <!-- Add Tile label here -->
        </ng-content>
      </p>

      <div class="flex items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none">
          <path
            d="M13.2929 7.29289C12.9024 7.68342 12.9024 8.31658 13.2929 8.70711L17.5858 13L8 13C7.44771 13 7 13.4477 7 14C7 14.5523 7.44771 15 8 15L17.5858 15L13.2929 19.2929C12.9024 19.6834 12.9024 20.3166 13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071L20.7071 14.7071C21.0976 14.3166 21.0976 13.6834 20.7071 13.2929L14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289ZM14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14Z"
            fill="#484848" />
        </svg>
        <div class="ml-auto w-14 h-14 bg-primary bg-opacity-10 rounded-md"></div>
      </div>
    </button>
  `,
})
export class TileComponent {}
