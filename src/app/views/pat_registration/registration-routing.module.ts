import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatRegistrationComponent } from './pat-.component';
import { fullRegistrationComponent } from './fullregistration.component';
const routes: Routes = [

 {
    path: '',
    data: {
      title: 'Registration'
    },
    children: [
      {
        path: 'quickregistration',
        component: PatRegistrationComponent,
        data: {
          title: 'QuickRegistration'
        }
      },
      {
        path: 'fullregistration',
        component: fullRegistrationComponent,
        data: {
          title: 'FullRegistration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {}
