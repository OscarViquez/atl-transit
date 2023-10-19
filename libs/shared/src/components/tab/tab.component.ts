import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/';

@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() content!: Tab[];
   currentTabIndex = 0;
   Loading = true;

   toggleTabActiveState(tab: Tab): void {
      if (!tab.active) {
         this.content.forEach((button) => {
            button.active = button === tab;
         });
      }
      this.currentTabIndex = this.content.findIndex((tab) => tab.active === true);
   }
}
