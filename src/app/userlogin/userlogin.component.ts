import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  formdata : FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }
  onClickSubmit(data) {
    console.log(data.uname);
    if (data.uname == "freetuts_audience" && data.passwd == "freetuts.net") {
      alert("Login Successful");
      this.router.navigate(['app-mainpage']);
    } else {
      alert("sai ời");
    }
  }

}
