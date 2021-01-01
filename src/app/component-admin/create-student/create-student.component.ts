import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Student} from '../../classes/Student';
import {StudentService} from '../../services/student.service';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})

export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  collages: any;
  selectedMajors: any;

  constructor(private studentService: StudentService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.student = new Student();
    this.http.get('../../../assets/data/collages.json')
      .subscribe(data => {
        this.collages = data;
      }, error => console.log(error));
  }

  save() {
    this.studentService.insertStudent(this.student)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Student added successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with creating student!',
        });
        console.log(error);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/list/student']);
  }

  collageControl = new FormControl('', Validators.required);

  onCollageChange(id: any) {
    this.selectedMajors = this.collages[id - 1].majors;
  }
}
