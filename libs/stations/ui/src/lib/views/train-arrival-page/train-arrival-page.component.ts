import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade } from 'stations-data';
import { OnInit } from '@angular/core';
import { RailArrival } from '../../models';

//component import 
import { RailArrivalCardComponent } from '../../components/rail-arrival-card/rail-arrival-card.component';
import { CardComponent } from 'shared';

@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [CommonModule,
   CardComponent,
   RailArrivalCardComponent],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit{
   arrivalData!: RailArrival[];
   constructor(public facade: Facade) {}

    async ngOnInit(): Promise<void>{
      try 
      {
      let result = await this.facade.initializePageRender()
      console.log(result)

      if(result == true)
      {
         this.arrivalData = this.facade.railArrivalData
      }
      }
      catch(error)
      {
         console.log(error)
      }
   }

      //console.log(this.facade.initializePageRender());
     // console.log(this.facade.arrivalData$.subscribe());
   }

