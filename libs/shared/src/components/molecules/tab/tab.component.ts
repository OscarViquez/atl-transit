import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonProps, ThemeButtonComponent } from '../../atoms';

@Component({
   selector: 'rya-tab',
   standalone: true,
   imports: [CommonModule, ThemeButtonComponent],
   template: `
      <div class="tabs">
         <ng-container *ngFor="let tab of tabs; let i = index; trackBy: trackByFn" [class.active]="i === activeTab">
            <rya-button [props]="tab" (click)="setActiveTab(i)" />
         </ng-container>
      </div>
   `,
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() tabs: ButtonProps[] = [];
   @Output() currentTabEmitter = new EventEmitter<number>();
   activeTab = 0;

   setActiveTab(index: number) {
      this.activeTab = index;
      this.setTabVariant();
      this.currentTabEmitter.emit(this.activeTab);
   }

   setTabVariant() {
      this.tabs.forEach((tab, i) => {
         tab.variant = i === this.activeTab ? 'primary' : 'secondary';
      });
   }

   trackByFn(index: number): number {
      return index;
   }
}
