import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonComponent, ModalComponent } from '@atl-transit/core';
import { TestModalComponent } from '../../core/ui/modal/test-modal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navigation-bottom-bar-btn',
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
        <h2 class="text-6 font-semibold mb-4">We don't have the schedule for this station yet.</h2>
        <p class="text-4 font-medium text-neutral-800">
          We are working hard to get the schedule for this station. Please check back later for
          updates.
        </p>

        <button class="btn btn-primary mt-8" (click)="onModalChange(true)">Primary</button>
        aaa
      </div>

      <!-- <div *ngIf="users$ | async as users">
        <ul>
          <li *ngFor="let user of users">
            {{ user.name }}
          </li>
        </ul>
      </div> -->

      <core-modal
        [isOpen]="isModalOpen"
        [isBottomSheet]="true"
        (modalChange)="onModalChange($event)">
        <div class="h-full">
          <div class="text-center mt-[10rem]">
            <h2 class="text-6 font-semibold mb-4">
              We don't have the schedule for this station yet.
            </h2>
            <p class="text-4 font-medium text-neutral-800">
              We are working hard to get the schedule for this station. Please check back later for
              updates.
            </p>
          </div>
        </div>
      </core-modal>

      <core-test-modal> My Test Modal </core-test-modal>
    </div>
  `,
})
export class DevPageComponent {
  // service$ = inject(DevService);
  // users$ = this.service$.users$;
  // posts$ = this.service$.posts$;
  // loading$ = this.service$.loading$.asObservable();

  isModalOpen = false;

  // ngOnInit(): void {
  //   this.users$ = this.service$.getUsers();
  // }

  onModalChange(value: boolean) {
    this.isModalOpen = value;
  }
}
