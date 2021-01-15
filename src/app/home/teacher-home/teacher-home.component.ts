import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../services/teacher.service';
import {Course} from '../../classes/Course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  courses: Course[];
  data: string;
  id: number = 0;
  currentDateTime: string;
  key: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teacherService: TeacherService) {
    this.currentDateTime = new Date().toLocaleString();
  }

  ngOnInit(): void {
    this.reload();
  }

  private reload() {
    this.teacherService.getCourses(localStorage.getItem('teacher_id'))
      .subscribe(res => {
        this.courses = res;
      }, error => {
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

  getQuotation(): string {
    return localStorage.getItem('quotation');
  }

  listStudents(id: number) {
    this.router.navigate(['list/course-students', id]);
  }

  listLectures(id: number) {
    this.router.navigate(['list/course-lectures', id]);
  }

  courseInfo(course: Course) {
    Swal.fire({
      title: '<strong>' + course.name + '</strong>',
      icon: 'info',
      html:
        'Course section : ' + course.sectionNumber + '<br>' +
        'Course hours : ' + course.hours + '<br>' +
        'Course Time : ' + course.hourFrom + ' - ' + course.hourTo + '<br>' +
        'Course Days : ' + course.days + '<br>',
      showCloseButton: true,
      focusConfirm: false
    });
  }

  generateQrCode(course: Course) {
    this.key = TeacherHomeComponent.getKey();
    this.data = JSON.stringify(this.currentDateTime + ' abusalah \n' + this.key);
    let timerInterval;
    Swal.fire({
      html: 'I will close in <b></b> milliseconds.',
      timer: 5000,
      timerProgressBar: true,
      showCancelButton: true,
      title: course.name,
      imageUrl: `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${this.data}&choe=UTF-8`,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = String(Swal.getTimerLeft());
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
        this.generateQrCode(course);
      }
    });
  }

  private static getKey() {
    let result = '';
    let characters = '0123456789@#$%&_-=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 45; i++) {
      result += characters.charAt(Math.floor(Math.random() * 70));
    }
    return result;
  }
}
