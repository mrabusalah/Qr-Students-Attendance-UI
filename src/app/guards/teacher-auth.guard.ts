import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TeacherService} from '../services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthGuard implements CanActivate {
  constructor(private teacherService: TeacherService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.teacherService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['teacher/login'], {
        queryParams: {returnUrl: state.url}
      });
      return false;
    }
  }
}
