import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Teacher} from '../../classes/Teacher';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacher: Teacher = new Teacher();
  submitted = false;

  constructor(private teacherService: TeacherService,
              private router: Router) {
  }

  ngOnInit() {
    this.teacher = new Teacher();
  }

  save() {
    this.teacherService.insertTeacher(this.teacher)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Teacher added successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with creating teacher!',
        });
        console.log(error);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/list/teacher']);
  }

}
