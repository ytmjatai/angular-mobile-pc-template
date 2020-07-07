import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isMobile$ = new BehaviorSubject<boolean>(false);
  isMobile = false;
  constructor() {
    this.init();
    window.onresize = () => this.init();
  }

  init() {
    const width = document.documentElement.clientWidth;
    if (width < 668) {
      this.isMobile = true;
      this.isMobile$.next(true);
      return;
    }
    this.isMobile = false;
    this.isMobile$.next(false);
  }

}