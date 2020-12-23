import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  results: any = [];
  constructor(
    private http:HttpClient,
    private router: Router,
    private contactService : ContactService
  ) { }

  ngOnInit(): void {
    // this.http.get("http://localhost:2402/api/contact/get-all").subscribe(data => {
    //   console.log(data);
    //   this.results = data;
    // });
    this.contactService.findAllContact().subscribe(
      data => {
        this.results = data
      }
    );
  }

  

}
