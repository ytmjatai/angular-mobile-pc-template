import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = {
    mobile_number: '',
    isPersistent: true
  };
  constructor() { }
}
