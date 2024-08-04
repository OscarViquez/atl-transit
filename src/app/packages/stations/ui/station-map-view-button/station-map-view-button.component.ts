import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-station-map-view-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed grid items-center inset-x-0 bottom-[84px] z-40 w-full h-[70px] px-2 lg:inset-x-auto lg:w-2/4 xl:hidden">
      <button
        class="flex flex-1 justify-between items-center px-6 h-full rounded-lg bg-white border border-neutral-200 animate-fade-up shadow-card transition-all ease-linear duration-100          focus-state-secondary">
        <div>
          <img class="w-12 h-12" src="/assets/images/apple-maps-icon.png" alt="maps icon" />
        </div>
        <div class="flex flex-col justify-between flex-1 text-left ml-3">
          <p class="text-5 font-medium">Map Available</p>
          <p class="text-4 font-normal text-neutral-800">View location of the station</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M19.7803 15.5303C19.4874 15.8232 19.0126 15.8232 18.7197 15.5303L12 8.81066L5.28033 15.5303C4.98744 15.8232 4.51256 15.8232 4.21967 15.5303C3.92678 15.2374 3.92678 14.7626 4.21967 14.4697L11.4697 7.21967C11.7626 6.92678 12.2374 6.92678 12.5303 7.21967L19.7803 14.4697C20.0732 14.7626 20.0732 15.2374 19.7803 15.5303Z"
              fill="#212121" />
          </svg>
        </div>
      </button>
    </div>
  `,
})
export class StationMapViewButtonComponent {}
