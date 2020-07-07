import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  queryDeals(): Promise<any> {
    const url = './assets/deal.json';
    return this.http.get(url).toPromise();
  }
}