import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateModule } from 'global-state';
import { HeaderComponent } from 'shared';

// TODO: Imports from Actions Can not be in any component file. Only Service files

@Component({
   standalone: true,
   imports: [RouterModule, HeaderComponent,
   StateModule],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'atl-transit';
}
