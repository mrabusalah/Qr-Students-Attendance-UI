import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Lecture} from '../../classes/Lecture';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-list-course-lectures',
  templateUrl: './list-course-lectures.component.html',
  styleUrls: ['./list-course-lectures.component.css']
})
export class ListCourseLecturesComponent implements OnInit {

  lectures: Lecture[];
  courseId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.courseId = +param.get('id');
      this.courseService.getLecturesByCourseId(this.courseId)
        .subscribe(res => {
          this.lectures = res;
        }, error => {
          console.log(error);
        });
    });
  }

  ngOnInit(): void {
  }

  goToHome() {
    if (!localStorage.getItem('username')) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home', localStorage.getItem('user_type')]);
    }
  }

  showAttendanceTable() {
    this.router.navigate(['list/lectures-attendance', 1]);
  }
}
