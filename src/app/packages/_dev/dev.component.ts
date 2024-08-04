import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonComponent, ModalComponent } from '@atl-transit/core';
import { TestModalComponent } from '../../core/ui/modal/test-modal.component';
import { RouterModule } from '@angular/router';
import { DevService } from './dev.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    TestModalComponent,
    LoadingSkeletonComponent,
    RouterModule,
  ],
  template: `
    <div class="h-full">
      <div class="text-center mt-[10rem]">
        <h2 class="text-6 font-semibold mb-4">
          Welcome to the Beta version of the atlanta transit page!
        </h2>
        <p class="text-4 font-medium text-neutral-800">
          Home page is under construction. Please check back later for updates. In the mean time,
          you can visit the trains page or search for a station.
        </p>

        <button class="btn btn-primary mt-8" (click)="onModalChange(true)">Primary</button>
      </div>

      <core-modal
        [isOpen]="isModalOpen"
        [isBottomSheet]="true"
        (modalChange)="onModalChange($event)">
        <div class="h-full">
          <div class="text-center mt-[10rem]">
            <h2 class="text-6 font-semibold mb-4">
              Welcome to the Beta version of the atlanta transit page!
            </h2>
            <p class="text-4 font-medium text-neutral-800">
              We are working hard to get the schedule for this station. Please check back later for
              updates.
            </p>
          </div>
        </div>
      </core-modal>
    </div>
  `,
})
export class DevComponent {
  users!: Observable<any[]>;
  photos!: Observable<any[]>;

  isModalOpen = false;

  constructor(private service: DevService) {}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  onModalChange(value: boolean) {
    this.isModalOpen = value;
  }
}
