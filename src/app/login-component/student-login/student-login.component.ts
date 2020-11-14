import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  exist: boolean;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
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
    this.studentService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe(
      res => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        localStorage.setItem('id', res.userId);
        localStorage.setItem('username', res.username);
        localStorage.setItem('user_type', 'student');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are in now ',
          footer: 'Welcome Back ' + localStorage.getItem('username'),
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate([`/student/home`]);
      },
      error => {
        this.exist = false;
        console.error(error);
      }
    );
  }
}
