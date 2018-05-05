import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PatRegistrationComponent } from './pat-.component';
import { RegistrationRoutingModule } from './registration-routing.module';

import { fullRegistrationComponent } from './fullregistration.component';
@NgModule({
  imports: [
    RegistrationRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ PatRegistrationComponent,fullRegistrationComponent ]
})
export class RegistrationModule { }
