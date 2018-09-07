import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TorqueExpComponent} from './torque-exp/torque-exp.component';
import { TrqCardModule, TrqButtonModule } from '@torque/ui';
import { CommonModule } from '@angular/common';
import { NgxPopperModule } from 'ngx-popper';
import { TrqElementIdModule } from '@torque/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



const routes: Routes = [
  { path: 'torque-exp', component: TorqueExpComponent },
   { path: '', redirectTo: '/torque-exp', pathMatch: 'full' },
];

@NgModule({
  declarations: [TorqueExpComponent],
  imports: [ RouterModule.forRoot(routes), 
    TrqCardModule, 
    TrqButtonModule, 
    CommonModule,
    NgxPopperModule,
    TrqElementIdModule,
    AngularFontAwesomeModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
