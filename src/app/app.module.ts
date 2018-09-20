import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TrqCardModule, TrqButtonModule, TrqDropdownModule, TrqIconModule, TrqRegisterIconService } from '@torque/ui';
import { AppRoutingModule } from './/app-routing.module';
import { TrqCoreModule } from '@torque/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrqFormFieldModule, TrqInputModule } from '@torque/forms';
import { NgxPopperModule } from 'ngx-popper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TrqElementIdModule } from '@torque/core';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    // Torque
    TrqCoreModule.forRoot(),
    TrqCardModule,
    TrqIconModule,
    CommonModule,
    TrqButtonModule,
    TrqDropdownModule,
    AppRoutingModule,
    NgxPopperModule,
    TrqElementIdModule
  ],
  providers: [TrqRegisterIconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
