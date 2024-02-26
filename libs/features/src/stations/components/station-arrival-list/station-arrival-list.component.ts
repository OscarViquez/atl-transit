import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective, LayoutDirective } from '@atl-transit/shared';
import { StationArrivalList } from '../../models';
import { StationArrivalCardComponent } from '../station-arrival-card/station-arrival-card.component';

@Component({
   selector: 'rya-station-arrival-list',
   standalone: true,
   imports: [CommonModule, CardDirective, LayoutDirective, StationArrivalCardComponent],
   templateUrl: './station-arrival-list.component.html',
   styleUrl: './station-arrival-list.component.scss'
})
export class StationArrivalListComponent {
/**
 * content is a generic interface that defines the properties for a table component.
 * @property data - An array of items of type T that the table will display.
 * @property columns - An array of keys of type T that the table will use to create columns.
 * @example
 * interface User {
 *   name: string;
 *   age: number;
 * }
 * const exampleTableProps: TableProps<User> = {
 *   data: [
 *     { name: 'Marta Aria', age: 25 },
 *     { name: 'John Smith', age: 30 }
 *   ],
 *   columns: ['name', 'age']
 * };
 * // This would create a table with two columns ('name' and 'age') and two rows of data.
 */
   @Input() content!: StationArrivalList;
   @Input() currentTabIndex!: number;
}
