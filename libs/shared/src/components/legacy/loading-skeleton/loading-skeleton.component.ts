import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-loading-skeleton',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './loading-skeleton.component.html',
   styleUrls: ['./loading-skeleton.component.scss']
})
export class LoadingSkeletonComponent {
@Input() loadingItem!: string;
}
