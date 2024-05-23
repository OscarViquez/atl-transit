import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-icon-close',
   standalone: true,
   imports: [CommonModule],
   template: `
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         viewBox="0 0 16 16"
         [attr.fill]="color"
      >
         <path
            d="M0.397052 0.553788L0.46967 0.46967C0.735936 0.203403 1.1526 0.179197 1.44621 0.397052L1.53033 0.46967L8 6.939L14.4697 0.46967C14.7626 0.176777 15.2374 0.176777 15.5303 0.46967C15.8232 0.762563 15.8232 1.23744 15.5303 1.53033L9.061 8L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L8 9.061L1.53033 15.5303C1.23744 15.8232 0.762563 15.8232 0.46967 15.5303C0.176777 15.2374 0.176777 14.7626 0.46967 14.4697L6.939 8L0.46967 1.53033C0.203403 1.26406 0.179197 0.8474 0.397052 0.553788L0.46967 0.46967L0.397052 0.553788Z"
            [attr.fill]="color"
         />
      </svg>
   `
})
export class CloseIconComponent {
   @Input() color = '#1F1F1F';
   @Input() filled = false;
}
