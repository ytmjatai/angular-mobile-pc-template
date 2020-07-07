import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GlobalService } from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  config: DrawerConfig = {};
  isMobile$: Subscription;
  isMobile: boolean;
  constructor(
    private globalSvc: GlobalService
  ) {
    this.isMobile$ = this.globalSvc.isMobile$.subscribe(
      val => {
        this.isMobile = val;
        this.init();
      }
    );

  }

  init() {
    if (this.isMobile) {
      this.config = {
        isMobile: true,
        shading: true,
        openedStateMode: 'overlap',
        minSize: 0,
        opened: true,
        closeOnOutsideClick: true
      };
    } else {
      this.config = {
        isMobile: false,
        shading: false,
        openedStateMode: 'shrink',
        minSize: 31,
        opened: true,
        closeOnOutsideClick: false
      };
    }
  }
}

export interface DrawerConfig {
  isMobile?: boolean;
  shading?: boolean;
  openedStateMode?: string;
  minSize?: number;
  opened?: boolean;
  closeOnOutsideClick?: boolean;
}
