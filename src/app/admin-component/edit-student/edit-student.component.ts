import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Student} from '../../classes/Student';
import {StudentService} from '../../services/student.service';
import {HttpClient} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: any;
  collageControl = new FormControl('', Validators.required);
  majorControl = new FormControl('', Validators.required);
  username: string;
  exist: boolean;
  submitted = false;
  collages: any;
  majors: any;
  selectedMajors: any;
  idIdx: number;

  constructor(private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {
    this.student = new Student();
    this.exist = true;
    this.http.get('../../../assets/data/collages.json')
      .subscribe(data => {
        this.collages = data;
      }, error => console.log(error));
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.username = param.get('username');
      this.studentService.getStudentByUsername(this.username)
        .subscribe(res => {
          this.student = res;
          this.reload();
        }, error => {
          this.exist = false;
          console.log(error);
        });
    });
  }

  ngOnInit() {

  }

  reload() {
    this.idIdx = +this.getId();
    this.onCollageChange(this.idIdx);
  }

  onCollageChange(id: number) {
    this.selectedMajors = this.collages[id - 1].majors;
  }

  getId() {
    for (let i = 0; i < this.collages.length; i++) {
      if (this.collages[i].collageName === this.student.collage) {
        return i + 1;
      }
    }
  }


  save() {
    this.studentService.updateStudent(this.student)
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
    this.router.navigate(['/list/student']);
  }


}
