import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from 'shared';

// TODO: Imports from Actions Can not be in any component file. Only Service files

@Component({
   standalone: true,
   imports: [
      RouterModule,
      NavigationComponent
   ],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'atl-transit';
}
