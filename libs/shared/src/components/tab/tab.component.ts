import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab.interface';
import {ButtonComponent} from './../button/button.component'

@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule, ButtonComponent],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() tabs!: Tab[] 
}
