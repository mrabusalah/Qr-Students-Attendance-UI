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
  quotations = [
    '‘A teacher is one who makes himself progressively unnecessary.’ –Thomas Carruthers',
    '‘Teaching is the highest form of understanding.’ –Aristotle',
    '‘When one teaches, two learn.’ –Robert Heinlein',
    '‘I cannot teach anybody anything, I can only make them think.’ –Socrates',
    '‘Teachers teach someone something, in that order.’ –Samuel Natale',
    '‘I cannot be a teacher without exposing who I am.’ –Paulo Freire',
    '‘The best teachers are the ones that change their minds.’ –Terry Heick',
    '‘A good teacher is like a candle – it consumes itself to light the way for others.’ –Mustafa Kemal Atatürk',
    '‘Good teaching is 1/4 preparation and 3/4 theatre.’ –Gail Goldwin',
    '‘The job of an educator is to teach students to see vitality in themselves.’ –Joseph Campbell'
  ];

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
        localStorage.setItem('quotation', this.quotations[Math.floor((Math.random() * this.quotations.length))]);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are in now ',
          footer: 'Welcome Back Dr. ' + localStorage.getItem('username'),
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate([`home`, localStorage.getItem('user_type')]);
      },
      error => {
        this.exist = false;
        console.error(error);
      }
    );
  }
}
