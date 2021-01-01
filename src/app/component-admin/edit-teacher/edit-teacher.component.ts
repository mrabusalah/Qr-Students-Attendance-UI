import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TeacherService} from '../../services/teacher.service';
import {Teacher} from '../../classes/Teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacher: any;
  username: string;
  exist: boolean;
  submitted = false;

  constructor(private teacherService: TeacherService,
              private router: Router,
              private route: ActivatedRoute) {
    this.teacher = new Teacher();
    this.exist = true;
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.username = param.get('username');
      this.teacherService.getTeacherByUsername(this.username)
        .subscribe(res => {
          this.teacher = res;
        }, error => {
          this.exist = false;
          console.log(error);
        });
    });
  }

  ngOnInit() {
  }

  save() {
    this.teacherService.updateTeacher(this.teacher)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Teacher updated successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with updating teacher!',
        });
        console.log(error);
      });
  }


  goToHome() {
    if (!localStorage.getItem('username')) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home', localStorage.getItem('user_type')]);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['list/teacher']);
  }


}
