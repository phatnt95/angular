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
  cutomerdata = [
    {
      name: "name",
      phone: "0966714",

    }
  ];
  constructor(
    private http : HttpClient
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
