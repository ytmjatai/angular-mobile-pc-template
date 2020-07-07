import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;

  constructor(
    public loginSvc: LoginService,
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void { }

  public async login(): Promise<void> {
    this.loading = true;
    await this.authSvc.login(this.loginSvc.user);
    setTimeout(() => {
      this.loading = false;
      this.navigateToRedirectUrl();
    }, 2000);
  }

  private navigateToRedirectUrl(): void {
    const defaultUrl = this.authSvc.role === 'user' ? '/home' : '/admin';
    const redirect = (!!this.authSvc.redirectUrl) ? this.authSvc.redirectUrl : defaultUrl;
    this.router.navigate([redirect]);
  }

  public gotoForgotPage(): void {
    this.router.navigate(['user/forget']);
  }

  public onSignUp(): void {
    this.router.navigate(['sign-up']);
  }

}
