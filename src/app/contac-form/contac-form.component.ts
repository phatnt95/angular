import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../class/contact';
import { User } from '../class/user';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contac-form',
  templateUrl: './contac-form.component.html',
  styleUrls: ['./contac-form.component.css']
})
export class ContacFormComponent implements OnInit {

  contact: Contact;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private contactService: ContactService) {
    this.contact = new Contact();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.contactService.save(this.contact).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
