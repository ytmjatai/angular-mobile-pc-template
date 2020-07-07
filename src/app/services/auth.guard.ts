import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService as AuthSvc } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  constructor(
    private authSvc: AuthSvc,
    private router: Router
  ) { }

  checkLogin(url: string): true | UrlTree {
    const token = localStorage.getItem('token');
    if (token === 'user') { return true; }

    // const profile = this.authSvc.currentUser$.getValue();
    // if (profile.role === 'user') { return true; }
    // // this.authSvc.redirectUrl = url;
    return this.router.parseUrl('/login');
  }

}
