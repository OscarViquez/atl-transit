import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'core-tab-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-list">
      @for (label of labels; track idx; let idx = $index) {
        <button
          class="tab-item           "
          [ngClass]="{ 'tab-item--active': idx === activeTab }"
          (click)="setActiveTab(idx)">
          {{ label }}
        </button>
      }
    </div>
  `,
})
export class TabListComponent {
  /**
   * The `labels` property holds the labels for all tabs.
   * It can be used by a parent component to set the labels of the tabs.
   * It is an @Input property, meaning it can be bound to a property of a parent component.
   */
  @Input() labels!: string[];

  /**
   * The `currentTabEmitter` event is emitted whenever the active tab is changed.
   * It emits a number value representing the index of the new active tab.
   * It is an @Output property, meaning a parent component can listen for this event.
   */
  @Output() currentTabEmitter = new EventEmitter<number>();

  /**
   * The `activeTab` property determines the current active tab.
   * It can be used by a parent component to set the initial active tab.
   */
  activeTab = 0;

  /**
   * The `setActiveTab` method is called when a tab is clicked.
   * It changes the active tab and emits the `currentTabEmitter` event.
   * @param index - Index of the tab
   */
  setActiveTab(index: number): void {
    this.activeTab = index;
    this.currentTabEmitter.emit(this.activeTab);
  }
}
