import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  exist: boolean;

  constructor(private route: ActivatedRoute,
              private teacherService: TeacherService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.exist = true;
    localStorage.clear();
    this.loginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.teacherService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe(
      res => {
        localStorage.setItem('id', res.id);
        localStorage.setItem('username', res.username);
        localStorage.setItem('user_type', 'teacher');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are in now ',
          footer: 'Welcome Back Dr. ' + localStorage.getItem('username'),
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate([`/teacher/home`]);
      },
      error => {
        this.exist = false;
        console.error(error);
      }
    );
  }
}
