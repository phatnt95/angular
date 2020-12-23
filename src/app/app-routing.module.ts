import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  // { path: 'contact', component: ContactComponent },
  // { path: 'add-contact', component: ContacFormComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/contact'},//mặc định trỏ tới home
  // { path: '**', component: NotFoundComponent},
  { path: '', component: UserloginComponent },
  { path: 'app-mainpage', component: MainpageComponent }
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
