import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   ButtonDirective,
   CardDirective,
   HeaderComponent,
   LayoutDirective
} from '@atl-transit/shared';
import { RouterModule } from '@angular/router';
import { PREVIEW_PAGE_MOCKS } from '../../mocks/mocks';
import { PreviewPage } from '../../models';

@Component({
   selector: 'rya-preview-page',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      HeaderComponent,
      LayoutDirective,
      ButtonDirective,
      CardDirective
   ],
   templateUrl: './preview-page.component.html',
   styleUrl: './preview-page.component.scss'
})
export class PreviewPageComponent {
   content: Partial<PreviewPage> = PREVIEW_PAGE_MOCKS;
}
