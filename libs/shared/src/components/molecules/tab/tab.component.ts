import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../../directives';

@Component({
   selector: 'rya-tab',
   standalone: true,
   imports: [CommonModule, ButtonDirective],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   /**
    * * Component Properties
    * @var labels: Labels for all Tabs
    * @var activeTab: number - Index of the active tab
    * @var currentTabEmitter: EventEmitter<number> - Emits the index of the active tab
    */
   @Input() labels!: string[];
   @Output() currentTabEmitter = new EventEmitter<number>();
   activeTab = 0;

   /**
    * @method setActiveTab - Sets the active tab
    * @param index - Index of the tab
    */
   setActiveTab(index: number): void {
      this.activeTab = index;
      this.currentTabEmitter.emit(this.activeTab);
   }
}
