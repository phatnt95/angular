import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  formdata: FormGroup;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {
    
  }
  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])),
      phone: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      email: new FormControl("")
    });
  }

  onClickSubmit(data) {
    this.contactService.saveContact(data).subscribe(result => this.gotoViewContact());
  }

  gotoViewContact() {
    this.router.navigate(['/view-contacts']);
  }

}
