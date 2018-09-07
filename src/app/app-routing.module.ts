import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TorqueExpComponent} from './torque-exp/torque-exp.component';
import { TrqCardModule, TrqButtonModule, TrqIconModule } from '@torque/ui';
import { CommonModule } from '@angular/common';
import { NgxPopperModule } from 'ngx-popper';
import { TrqElementIdModule } from '@torque/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
   { path: '', redirectTo: '/side-nav', pathMatch: 'full' },
   { path: 'torque-exp', component: TorqueExpComponent },
   {path: 'side-nav', component: SideNavigationComponent}
];

@NgModule({
  declarations: [TorqueExpComponent, SideNavigationComponent],
  imports: [ RouterModule.forRoot(routes),
    TrqCardModule,
    TrqButtonModule,
    TrqIconModule,
    CommonModule,
    FormsModule,
    NgxPopperModule,
    TrqElementIdModule,
    AngularFontAwesomeModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
