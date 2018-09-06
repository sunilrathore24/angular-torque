import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorqueAppRoutingModule } from './torque-app-routing.module';
import { TorqueAppComponent } from './torque-app.component';
import { TrqCardModule } from '@saba/torque';


@NgModule({
  imports: [
    CommonModule,
    TorqueAppRoutingModule
  ],
  declarations: [TorqueAppComponent,TrqCardModule]
})
export class TorqueAppModule { }
