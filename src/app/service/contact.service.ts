import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../class/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:2402/api/contact'
  }
  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl+'/get-all');
  }

  public save(contact: Contact) {
    return this.http.post<Contact>(this.baseUrl, contact);
  }
}
