import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Course} from '../../classes/Course';
import {CourseService} from '../../services/course.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course = new Course();
  submitted = false;
  weekDaysControl = new FormControl('', Validators.required);
  days = [
    'أحد - ثلاثاء - خميس',
    'اثنبن - أربعاء',
    'أحد - ثلاثاء - أربعاء - خميس'
  ];

  constructor(private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    this.course = new Course();
  }

  save() {
    this.courseService.insertCourse(this.course)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Course added successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with creating course!',
        });
        console.log(error);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/list/course']);
  }
}
