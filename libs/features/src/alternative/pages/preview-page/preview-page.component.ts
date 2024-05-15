import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   HeaderComponent,
   LoadingSkeletonComponent,
   ModalComponent,
   SearchBarComponent,
   ToastComponent
} from '@atl-transit/shared';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'rya-preview-page',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      HeaderComponent,
      ModalComponent,
      SearchBarComponent,
      LoadingSkeletonComponent,
      ToastComponent
   ],
   templateUrl: './preview-page.component.html',
   styleUrl: './preview-page.component.scss'
})
export class PreviewPageComponent {
   openModal = false;

   onModalChange(open: boolean) {
      this.openModal = open;
   }
}
