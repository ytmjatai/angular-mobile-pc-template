import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileModel } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  profile: ProfileModel = {};

  @Input() visible: boolean;
  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.profile = await this.authSvc.getProfile();
  }

  onClose() {
    this.visible = false;
  }

}


