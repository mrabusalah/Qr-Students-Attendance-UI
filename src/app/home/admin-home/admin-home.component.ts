import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {TeacherService} from '../../services/teacher.service';
import {CourseService} from '../../services/course.service';
import {FormControl, Validators} from '@angular/forms';
import {Course} from '../../classes/Course';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  studentsNumber: number = 0;
  teachersNumber: number = 0;
  coursesNumber: number = 0;
  absentNumber: number = 0;
  coursesControl = new FormControl('', Validators.required);
  courses: Course[];

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.studentService.getCount().subscribe(res => {
      this.studentsNumber = +res;
    }, error => {
      console.log(error);
    });

    this.teacherService.getCount().subscribe(res => {
      this.teachersNumber = +res;
    }, error => {
      console.log(error);
    });

    this.courseService.getCount().subscribe(res => {
      this.coursesNumber = +res;
    }, error => {
      console.log(error);
    });

    this.courseService.list().subscribe(res => {
      this.courses = res;
    }, error => {
      console.log(error);
    });
  }

  pickAttendanceByDateAndCourse() {

  }
}
