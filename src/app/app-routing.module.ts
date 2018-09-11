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
import {MatButtonModule} from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SpeechRecognitionService } from './voice-record/speech-recognition.service';
import {VoiceRecordComponent} from './voice-record/voice-record.component';




const routes: Routes = [
   { path: '', redirectTo: '/torque-exp', pathMatch: 'full' },
   { path: 'torque-exp', component: TorqueExpComponent },
   {path: 'side-nav', component: SideNavigationComponent},
   {path: 'app-voice-record', component: VoiceRecordComponent}
];

@NgModule({
  declarations: [TorqueExpComponent, SideNavigationComponent],
  imports: [ RouterModule.forRoot(routes),
    PerfectScrollbarModule,
    TrqCardModule,
    TrqButtonModule,
    TrqIconModule,
    CommonModule,
    FormsModule,
    NgxPopperModule,
    TrqElementIdModule,
    AngularFontAwesomeModule,
    MatButtonModule
],
providers: [
  SpeechRecognitionService
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
