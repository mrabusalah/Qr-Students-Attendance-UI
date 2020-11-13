import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  exist: boolean;

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
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
    this.adminService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe(
      res => {
        localStorage.setItem('user_type', 'admin');
        localStorage.setItem('username', 'admin');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are in now ',
          footer: 'Welcome Back Admin',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate([`home`, 'admin']);
      },
      error => {
        this.exist = false;
        console.error(error);
      }
    );
  }
}
