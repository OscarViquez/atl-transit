import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { reducers } from './+state/reducers/user.reducer';
import { DataService } from './services/data.service';
@NgModule({
   declarations: [],
   imports: [HttpClientModule, StoreModule.forRoot({}), StoreModule.forFeature('user', reducers)],
   providers: [DataService],
   bootstrap: []
})
export class DataModule {
   //   StoreDevtoolsModule.instrument({
   //     maxAge: 25
   //  })
}
