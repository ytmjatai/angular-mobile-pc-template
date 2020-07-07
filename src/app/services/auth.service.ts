import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { environment } from '../../environments/environment';

import { ProfileModel } from '../models/profile';
import { LoginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;
  public currentUser$ = new BehaviorSubject<ProfileModel>({});
  public token: string;
  storage: Storage = localStorage;
  role = '';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async login(model: LoginModel): Promise<any> {
    try {
      this.role = model.mobile_number.toString();
      localStorage.setItem('token', this.role);

      await this.getProfile();
    } catch (error) {
      console.error(error);
    }
  }

  public async getProfile(): Promise<ProfileModel> {
    try {
      const profile = {
        name: 'jatai',
        client_name: 'client name',
        email: '56@gmail.com',
        mobile_number: 13800886688,
        role: localStorage.getItem('token')
      }
      // localStorage.setItem('token', this.role);
      this.currentUser$.next(profile);
      return profile;
    } catch (error) {
      console.error(error);
    }

  }

  public async logout(): Promise<void> {
    localStorage.clear();
    this.currentUser$.next({});
    this.router.navigate(['/login']);
    return;

    this.token = null;
    this.currentUser$.next({});
  }

}

