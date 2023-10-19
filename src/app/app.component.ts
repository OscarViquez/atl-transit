import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'shared';
import { DataModule } from 'stations-data';

// TODO: Imports from Actions Can not be in any component file. Only Service files

@Component({
   standalone: true,
   imports: [RouterModule, HeaderComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent{
   title = 'atl-transit';
}
