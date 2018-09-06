import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TrqCardModule, TrqButtonModule, TrqDropdownModule, TrqIconModule } from '@torque/ui';
import { AppRoutingModule } from './/app-routing.module';
import { TrqCoreModule } from '@torque/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // Torque
    TrqCoreModule.forRoot(),

    TrqCardModule,
    TrqIconModule,
    TrqButtonModule,
    TrqDropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
