import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'core-top-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex gap-3 items-center w-full p-4 bg-white  shadow-sm rounded-md fixed z-30 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <g clip-path="url(#clip0_6401_3673)">
          <mask
            id="mask0_6401_3673"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="32"
            height="32">
            <path
              d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
              fill="white" />
          </mask>
          <g mask="url(#mask0_6401_3673)">
            <path
              d="M25.2996 -2.32284L15.896 -11.7264L-13.3044 17.474L-3.9008 26.8776L25.2996 -2.32284Z"
              fill="#F37521" />
            <path
              d="M35.4736 7.37005L25.4614 -2.64209L-2.31443 25.1338L7.6977 35.1459L35.4736 7.37005Z"
              fill="#FCB117" />
            <path
              d="M42.9685 16.0758L34.073 7.1803L7.8865 33.3668L16.782 42.2623L42.9685 16.0758Z"
              fill="#0393CF" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6401_3673">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="flex flex-col gap-1">
        <span class="text-4 leading-3	font-medium text-neutral-900">Atlanta</span>
        <span class="text-1 leading-3	font-medium text-neutral-800">Transit Concept</span>
      </div>
    </div>
  `,
})
export class TopNavComponent {}
