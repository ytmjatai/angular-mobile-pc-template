import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  // async setEmail(email: string): Promise<void> {
  //   const url = environment.serverUrl + '/api/password/reset/';
  //   const model = {
  //     email: email
  //   };
  //   return await this.http.post<void>(url, model).toPromise();

  // }

  // async changePassword(model: SetPasswordModel): Promise<void> {
  //   const url = environment.serverUrl + '/api/password';
  //   await this.http.post<any>(url, model).toPromise();
  // }

  // async resetPassword(model: SetPasswordModel) {
  //   const url = environment.serverUrl + '/api/password/reset/confirm';
  //   return await this.http.post<any>(url, model).toPromise();
  // }

}

export interface SetPasswordModel {
  uid?: string;
  token?: string;
  new_password?: string;
  current_password?: string;
}
