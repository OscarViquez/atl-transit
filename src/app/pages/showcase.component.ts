import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, SearchBarComponent } from '@atl-transit/shared';
@Component({
   standalone: true,
   imports: [CommonModule, ModalComponent, SearchBarComponent],
   selector: 'app-showcase',
   template: `
      <main class="preview-page">
         <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="false" />
         <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="true" />

         <!-- Toast container -->
         <!-- <div class="fixed flex flex-col gap-4 z-10 bottom-8 right-8">
                <shared-toast> Hello </shared-toast>
                <shared-toast variant="error"> Error </shared-toast>
                <shared-toast variant="success"> Success </shared-toast>
            </div> -->

         <h2>Preview Page</h2>

         <!-- Example of Button  -->
         <!-- <button class="btn btn-primary">Button</button> -->
         <!-- <button class="btn btn-primary btn-small">Button</button> -->
         <!-- <button class="btn btn-primary btn-fill">Primary Fill</button> -->

         <!-- <div class="card">
            <a class="link" href="#">Go to Schedule</a>
         </div>

         <div class="input relative">
            <input type="text" class="block" placeholder="XXX-XXX-XXX-XXX" />
            <label>Label</label>
         </div>

         <section class="card relative bg-black">
            <h3>Card Header</h3>
            <p>Card Body</p>
            <p>Card Body</p>
            <div class="tooltip tip tip-top-left z-30">
               <p>
                  To speak with a representative about a new or existing reservation, call
                  800-221-1212. If you are a Medallion® Member, check the Contact Us section in the
                  Fly Delta mobile app for your dedicated phone line. If you are a SkyMiles member,
                  have your SkyMiles account number available to expedite your call.
               </p>
               <br />
               <p>You may contact Reservation Sales 24 hours/day, 7 days/week.</p>
            </div>
         </section>

         <div class="card">
            <div class="skeleton-loader"></div>
            <div class="skeleton-loader"></div>
            <div class="skeleton-loader"></div>
            <div class="skeleton-loader"></div>
         </div> -->

         <!-- <div class="card">
            <div>
               <span class="badge">Badge</span>

               <span class="badge badge-gold badge-icon-pill">G</span>

               <span class="badge badge-red">Red Badge</span>

               <span class="badge badge-green">Green Badge</span>

               <span class="badge badge-blue">Blue Badge</span>

               <span class="badge badge-gray">Gray Badge</span>

               <span class="badge badge-black">Black Badge</span>

               <span class="badge badge-radius-default">Default Radius Badge</span>

               <span class="badge badge-pill">Pill Radius Badge</span>
            </div>

            <button class="btn btn-accent btn-fill" (click)="openModal = true">Open</button>

            <shared-modal
               [isOpen]="openModal"
               [isBottomSheet]="false"
               (modalChange)="onModalChange($event)"
               class="scrollbar-hide"
            >
               <div class="input input-disabled relative">
                  <input type="text" class="block" placeholder="XXX-XXX-XXX-XXX" />
                  <label>Label</label>
               </div>

               <div class="card">
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
               </div>
               <div class="card">
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
               </div>
               <div class="card">
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
               </div>
               <div class="card">
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
               </div>

               <div class="card">
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
                  <div class="skeleton-loader"></div>
               </div>
               <button class="btn btn-primary btn-fill">Save</button>
            </shared-modal>
         </div> -->

         <button class="btn btn-primary btn-fill">Fill</button>
      </main>
   `
})
export class ShowcaseComponent {
   openModal = false;

   onModalChange(open: boolean) {
      this.openModal = open;
   }
}
