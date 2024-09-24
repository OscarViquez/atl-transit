import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeleton } from '../../models';

@Component({
  selector: 'core-loading-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-skeleton.component.html',
})
export class LoadingSkeletonComponent {
  @Input() loadingItem: LoadingSkeleton = 'header';
}
