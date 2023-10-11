import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'shared';
import { DataModule, Facade } from 'stations-data';

// TODO: Imports from Actions Can not be in any component file. Only Service files

@Component({
   standalone: true,
   imports: [RouterModule, DataModule, HeaderComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   title = 'atl-transit';

   constructor(private facade: Facade){}

    ngOnInit(): void {

   }

}
