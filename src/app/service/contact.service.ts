import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {
  private url = this.baseUrl + '/contact';
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * find all contact
   */
  public findAllContact() {
    return this.http.get(this.url + '/get-all');
  }

  /**
   * saveContact
   */
  public saveContact(data) {
    return this.http.post(this.url + '/save', data);
  }
}
