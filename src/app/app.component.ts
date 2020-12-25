import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as $ from 'jquery'
import { UserloginComponent } from './userlogin/userlogin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring boot - Angular';
  constructor(private dialog : MatDialog) {}

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    
  }

  openDialog() {
    
      this.dialog.open(MatDialog);
    
  }

}


