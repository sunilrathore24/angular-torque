import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TrqCardModule, TrqButtonModule, TrqDropdownModule, TrqIconModule, TrqRegisterIconService } from '@torque/ui';
import { AppRoutingModule } from './/app-routing.module';
import { TrqCoreModule } from '@torque/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrqFormFieldModule, TrqInputModule } from '@torque/forms';
import { VoiceRecordComponent } from './voice-record/voice-record.component';



@NgModule({
  declarations: [
    AppComponent,
    VoiceRecordComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // Torque
    TrqCoreModule.forRoot(),
    TrqCardModule,
    TrqIconModule,
    TrqButtonModule,
    TrqDropdownModule,
    AppRoutingModule,
  ],
  providers: [TrqRegisterIconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
