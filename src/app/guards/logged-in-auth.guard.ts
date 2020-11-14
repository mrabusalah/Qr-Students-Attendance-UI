import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!localStorage.getItem('username')) {
      return true;
    } else {
      this.router.navigate(['home', localStorage.getItem('user_type')], {
        queryParams: {returnUrl: state.url}
      });
      return false;
    }
  }
}
