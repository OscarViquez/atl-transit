import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { arrivalReducer } from './+state/reducers/arrivals.reducer';
import { DataService } from './services/data.service';
import { Facade } from './services';
@NgModule({
   declarations: [],
   imports: [HttpClientModule, StoreModule.forRoot({}), StoreModule.forFeature('arrivals', arrivalReducer)],
   providers: [DataService, Facade],
   bootstrap: []
})
export class DataModule {
}
