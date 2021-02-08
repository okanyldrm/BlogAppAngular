import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { flattenDiagnosticMessageText } from 'typescript';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authService.loggedIn();
    if (logged) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
