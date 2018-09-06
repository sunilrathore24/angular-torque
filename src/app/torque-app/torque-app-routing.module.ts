import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TorqueAppComponent} from '../torque-app/torque-app.component';

const routes: Routes = [
  {
    path: '',
    component: TorqueAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorqueAppRoutingModule { }
