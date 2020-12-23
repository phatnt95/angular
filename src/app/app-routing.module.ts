import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // { path: 'contact', component: ContactComponent },
  // { path: 'add-contact', component: ContacFormComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/contact'},//mặc định trỏ tới home
  // { path: '**', component: NotFoundComponent},
  // { path: '', component: UserloginComponent },
  // { path: 'app-mainpage', component: MainpageComponent }
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'view-contacts', component: ViewContactComponent },
  { path: 'add-contact', component: AddContactComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
