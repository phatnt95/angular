import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ListStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
