import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTileBtnComponent } from '../../ui/card-tile-btn/card-tile-btn.component';
import { ModalComponent } from '@atl-transit/shared';
import { ViewCardModalComponent } from '../view-card-modal/view-card-modal.component';
import { SavedCardModalComponent } from '../saved-card-modal/saved-card-modal.component';

@Component({
   selector: 'app-cards-page',
   standalone: true,
   imports: [
      CommonModule,
      CardTileBtnComponent,
      ViewCardModalComponent,
      SavedCardModalComponent,
      ModalComponent
   ],
   template: `
      <main class="flex flex-col gap-8 mx-auto mb-8">
         <section class="flex flex-col gap-8">
            <div class="flex flex-col gap-1">
               <h1 class="text-8 font-bold">Cards</h1>
               <p class="text-4 font-medium text-neutral-800">
                  View balance for a Breeze Card or save your Breeze Card serial number.
               </p>
            </div>
            <div class="flex gap-4">
               <app-card-tile-btn class="flex-1" (click)="showViewCardBalanceModal = true">
                  View Card balance
               </app-card-tile-btn>
               <app-card-tile-btn class="flex-1" (click)="showAddCardModal = true">
                  Save a Breeze Card
               </app-card-tile-btn>
            </div>
         </section>

         <section class="flex flex-col gap-6 py-6">
            <h2 class="text-7 font-bold">Saved Cards</h2>

            <!-- Empty State -->
            <div class="bg-primary bg-opacity-10 rounded-md h-[9.125rem]"></div>
            <div class="text-center">
               <h3 class="text-5 font-medium text-black mb-2">No Transit Card Found</h3>
               <p class="text-4 font-medium text-neutral-800">
                  You haven't saved any Breeze Cards yet. Save a Breeze Card to quickly view your
                  balance.
               </p>
            </div>
         </section>

         <app-view-card-modal
            [openModal]="showViewCardBalanceModal"
            (modalChange)="handleViewBalanceModal($event)"
         />

         <app-saved-card-modal
            [openModal]="showAddCardModal"
            (modalChange)="handleAddCardChangeModal($event)"
         />
      </main>
   `
})
export class CardsPageComponent {
   showViewCardBalanceModal = false;
   showAddCardModal = false;

   handleViewBalanceModal(value: boolean): void {
      this.showViewCardBalanceModal = value;
   }

   handleAddCardChangeModal(value: boolean): void {
      this.showAddCardModal = value;
   }
}
