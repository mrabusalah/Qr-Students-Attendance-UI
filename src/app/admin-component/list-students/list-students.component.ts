import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../../classes/Student';
import {StudentService} from '../../services/student.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'name', 'collage', 'major', 'action'];
  dataSource: MatTableDataSource<Student>;
  students: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService,
              private router: Router) {
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit() {
    this.studentService.listStudents().subscribe(res => {
      this.dataSource = new MatTableDataSource<Student>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudent(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudentById(id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Done...',
            text: 'Student deleted successfully!',
          });
          this.ngOnInit();
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Opps...',
            text: 'There is an issue with deleting student!',
          });
          console.log(error);
        });
      }
    });
  }

  editStudent(username: string) {
    this.router.navigate(['edit/student', username]);
  }
}
