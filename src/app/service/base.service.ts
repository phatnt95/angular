import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseUrl = 'http://localhost:2402/api';
  constructor() { }
}
