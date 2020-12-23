import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  formdata: FormGroup;
  results: any = [];
  cutomerdata = [
    {
      name: "name",
      phone: "0966714",

    }
  ];
  constructor(
    private http: HttpClient
  ) { }
  stateCtrl: FormControl;
  ngOnInit() {
    debugger
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      phone: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      address: new FormControl(""),
      message: new FormControl("")
    });
    // this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
    //   console.log(data);
    //   this.results = data;
    // });
    this.http.get("http://localhost:2402/api/contact/get-all").subscribe(data => {
      console.log(data);
      this.results = data;
    });
  }
  onClickSubmit(data) {
    document.getElementById("custtable").style.display = "";
    var row = {
      "name": data.name,
      "phone": data.phone,
      "address": data.address,
      "message": data.message
    };

    this.cutomerdata.push(row);
    console.log(this.cutomerdata);
  }



}
