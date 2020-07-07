import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  queryHistories(): Promise<any> {
    const url = './assets/history.json';
    return this.http.get(url).toPromise();
  }
}