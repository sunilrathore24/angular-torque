import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TrqCardModule, TrqButtonModule, TrqDropdownModule, TrqIconModule } from '@torque/ui';
import { AppRoutingModule } from './/app-routing.module';
import { TrqCoreModule } from '@torque/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrqFormFieldModule, TrqInputModule } from '@torque/forms';



@NgModule({
  declarations: [
    AppComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
