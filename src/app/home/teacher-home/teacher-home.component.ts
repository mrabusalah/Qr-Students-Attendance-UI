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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.reload();
  }

  private reload() {
    this.teacherService.getCourses(localStorage.getItem('username'))
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

  listLectures() {

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
}
