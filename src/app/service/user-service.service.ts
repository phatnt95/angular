import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl: string
  constructor() { 
    this.baseUrl = 'http://localhost:8080/users';
  }
}
