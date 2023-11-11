import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTrainErrorMessage } from '../../../shared';

@Component({
   selector: 'lib-station-error-message',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './station-error-message.component.html',
   styleUrls: ['./station-error-message.component.scss']
})
export class StationErrorMessageComponent {
   @Input() content!: GenericTrainErrorMessage;
}
