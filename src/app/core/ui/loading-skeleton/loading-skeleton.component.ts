import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingItem } from '../../models';

@Component({
  selector: 'core-loading-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-skeleton.component.html',
})
export class LoadingSkeletonComponent {
  @Input() loadingItem: LoadingItem = 'header';
}
