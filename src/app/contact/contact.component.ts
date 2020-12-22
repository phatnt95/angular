import { Component, OnInit } from '@angular/core';
import { Contact } from '../class/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService:ContactService) { 
    
  }

  ngOnInit(): void {
    this.contactService.findAll().subscribe(data => {
      this.contacts = data;
    })
  }

}
