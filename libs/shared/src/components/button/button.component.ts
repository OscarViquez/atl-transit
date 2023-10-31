import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../models';

@Component({
   selector: 'lib-button',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './button.component.html',
   styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
   // TODO: Will Refactor to use a generic button component
   // TODO: Use Directives for this component
   @Input() content!: Button;
   @Input() isLoading!: boolean;
}
