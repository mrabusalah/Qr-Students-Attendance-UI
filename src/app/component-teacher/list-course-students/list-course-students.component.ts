import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-list-course-students',
  templateUrl: './list-course-students.component.html',
  styleUrls: ['./list-course-students.component.css']
})
export class ListCourseStudentsComponent implements OnInit {

  students: Map<string, string>;
  courseId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.courseId = +param.get('id');
      this.studentService.getStudentsByCourseId(this.courseId)
        .subscribe(res => {
          console.log(res);
          this.students = res;
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
}
