import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserInterface } from 'shared';
import { Observable } from 'rxjs';
import { DataModule } from 'stations-data';
import { HeaderComponent } from 'shared';

// TODO: Imports from Actions Can not be in any component file. Only Service files
import { locateUser } from 'libs/stations/data/src/+state/actions/user.action';

@Component({
   standalone: true,
   imports: [RouterModule, DataModule, HeaderComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'atl-transit';

}
