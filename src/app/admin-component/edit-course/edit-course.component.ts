import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Course} from '../../classes/Course';
import {CourseService} from '../../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: any;
  weekDaysControl = new FormControl('', Validators.required);
  id: number;
  exist: boolean;
  submitted = false;
  days = [
    'أحد - ثلاثاء - خميس',
    'اثنبن - أربعاء',
    'أحد - ثلاثاء - أربعاء - خميس'
  ];

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
    this.course = new Course();
    this.exist = true;
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.courseService.getCourseById(this.id)
        .subscribe(res => {
          this.course = res;
        }, error => {
          this.exist = false;
          console.log(error);
        });
    });
  }

  ngOnInit() {

  }

  save() {
    this.courseService.updateCourse(this.course)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Course updated successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with updating course!',
        });
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

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/list/course']);
  }


}
