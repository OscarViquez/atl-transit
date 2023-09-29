import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade } from 'stations-data';
import { OnInit } from '@angular/core';
@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit{
   constructor(public facade: Facade) {}

   ngOnInit(): void {
      this.facade.initializePageRender();
      console.log(this.facade.initializePageRender());
      console.log(this.facade.arrivalData$.subscribe());
   }
}
