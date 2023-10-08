import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab.interface';
import { ButtonComponent } from './../button/button.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ViewService } from 'stations-data';

@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule, ButtonComponent],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() content!: Tab[];

   constructor(private view: ViewService) {}

   toggleTabActiveState(tab: Tab): void {
      if (!tab.active) {
         this.content.forEach((button) => {
            button.active = button === tab;
         });
      }

      this.view.currentTabIndex = this.content.findIndex((tab) => tab.active === true);
   }
}
