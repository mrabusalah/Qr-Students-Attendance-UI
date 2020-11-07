import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import Swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  wrongCredential: boolean;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private router: Router,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    localStorage.clear();
    this.wrongCredential = true;
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

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your are login now ',
          footer: 'Welcome Back ' + localStorage.getItem('username'),
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate([`/student/home`]);
      },
      error => {
        this.wrongCredential = false;
        console.error(error);
      }
    );
  }
}
