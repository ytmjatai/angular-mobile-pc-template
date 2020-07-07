import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RxEventService } from '../../services/rx-event.service';
import { LayoutService } from '../layout/layout.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openDrawer: boolean;
  profileVisible = false;
  constructor(
    private rxEvent: RxEventService,
    private router: Router,
    public layoutSvc: LayoutService,
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
    this.openDrawer = this.layoutSvc.config.isMobile ? false : true;
  }

  toggleDrawer() {
    this.openDrawer = !this.openDrawer;
    this.layoutSvc.config.opened = !this.layoutSvc.config.opened;
    this.rxEvent.publish('toggle-drawer', this.layoutSvc.config.opened)
  }

  onGoHome() {

  }

  gotoChange() {
    this.router.navigate(['/user/reset']);
  }

  onLogout() {
    this.authSvc.logout();
  }

  openProfile() {
    this.profileVisible = true;
  }

}
