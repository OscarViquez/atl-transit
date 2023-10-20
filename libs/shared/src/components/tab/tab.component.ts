import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab.interface';
// eslint-disable-next-line @nx/enforce-module-boundaries


@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() content!: Tab[];

   constructor() {}

   toggleTabActiveState(tab: Tab): void {
      if (!tab.active) {
         this.content.forEach((button) => {
            button.active = button === tab;
         });
      }

     // this.view.currentTabIndex = this.content.findIndex((tab) => tab.active === true);
   }
}
