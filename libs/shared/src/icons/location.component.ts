import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-icon-location',
   standalone: true,
   imports: [CommonModule],
   template: `
      @if (filled) {
         <svg
            xmlns="http://www.w3.org/2000/svg"
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 20 20"
            fill="none"
         >
            <path
               d="M19.8962 2.04204C20.3628 0.82893 19.1708 -0.363027 17.9577 0.103555L0.961634 6.6405C-0.397325 7.16318 -0.2897 9.12059 1.11836 9.49113L8.12921 11.3361C8.39066 11.4049 8.59484 11.6091 8.66364 11.8705L10.5086 18.8814C10.8791 20.2894 12.8366 20.3971 13.3592 19.0381L19.8962 2.04204Z"
               [attr.fill]="color"
            />
         </svg>
      } @else {
         <svg
            xmlns="http://www.w3.org/2000/svg"
            [attr.width]="size"
            [attr.height]="size"
            viewBox="0 0 20 20"
            fill="none"
         >
            <path
               d="M17.9577 0.103555C19.1708 -0.363027 20.3628 0.828929 19.8962 2.04204L13.3592 19.0381C12.8366 20.3971 10.8791 20.2894 10.5086 18.8814L8.66365 11.8705C8.59484 11.6091 8.39066 11.4049 8.12921 11.3361L1.11836 9.49113C-0.2897 9.12059 -0.397325 7.16318 0.961634 6.6405L17.9577 0.103555ZM18.4962 1.50357L1.5001 8.04052L8.51095 9.88548C9.29529 10.0919 9.90785 10.7044 10.1143 11.4888L11.9592 18.4996L18.4962 1.50357Z"
               [attr.fill]="color"
            />
         </svg>
      }
   `
})
export class LocationIconComponent {
   @Input() color = '#ffffff';
   @Input() filled = false;
   @Input() size = 20;
}
