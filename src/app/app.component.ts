import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'shared';
import {StateModule} from 'libs/+state/src/lib/state.module'

// TODO: Imports from Actions Can not be in any component file. Only Service files

@Component({
   standalone: true,
   imports: [RouterModule, StateModule, HeaderComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'atl-transit';
}
