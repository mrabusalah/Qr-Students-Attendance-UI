import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StudentService} from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {
  constructor(private studentService: StudentService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.studentService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['student/login'], {
        queryParams: {returnUrl: state.url}
      });
      return false;
    }
  }
}
