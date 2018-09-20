import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrqCardModule, TrqButtonModule, TrqIconModule } from '@torque/ui';
import { CommonModule } from '@angular/common';
import { NgxPopperModule } from 'ngx-popper';
import { TrqElementIdModule } from '@torque/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SpeechRecognitionService } from './voice-record/speech-recognition.service';
import {CompletedLearningComponent} from './completed-learning/completed-learning.component';
import {LearningRequestsComponent} from './learning-requests/learning-requests.component';
import {PlanComponent} from './plan/plan.component';
import { ActivityComponent } from './activity/activity.component';



const routes: Routes = [
   { path: '', redirectTo: '/plan', pathMatch: 'full' },
   {path: 'plan', component: PlanComponent},
   {path: 'completed learning', component: CompletedLearningComponent},
   {path: 'learning requests', component: LearningRequestsComponent},
   {path: 'activity', component: ActivityComponent}
];

@NgModule({
  declarations: [
    PlanComponent,
    CompletedLearningComponent,
    LearningRequestsComponent,
    ActivityComponent],
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
  exports: [RouterModule, CompletedLearningComponent, LearningRequestsComponent, PlanComponent, ActivityComponent]
})
export class AppRoutingModule { }
