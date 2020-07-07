import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  queryRates(): Promise<any> {
    const url = './assets/rate.json';
    return this.http.get(url).toPromise();
  }
}
