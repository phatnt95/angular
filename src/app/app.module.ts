import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactService } from './service/contact.service';
import { ModalComponent } from './modal/modal.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    ViewContactComponent,
    AddContactComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [
    // ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
