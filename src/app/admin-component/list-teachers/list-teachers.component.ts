import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Teacher} from '../../classes/Teacher';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'name', 'email', 'phone' , 'action'];
  dataSource: MatTableDataSource<Teacher>;
  teacher: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private teacherService: TeacherService,
              private router: Router) {
    this.dataSource = new MatTableDataSource(this.teacher);
  }

  ngOnInit() {
    this.teacherService.list().subscribe(res => {
      this.dataSource = new MatTableDataSource<Teacher>(res);
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

  deleteTeacher(id: number) {
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
        this.teacherService.deleteTeacherById(id)
          .subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: 'Done...',
              text: 'Teacher deleted successfully!',
            });
            this.ngOnInit();
          }, error => {
            Swal.fire({
              icon: 'error',
              title: 'Opps...',
              text: 'There is an issue with deleting teacher!',
            });
            console.log(error);
          });
      }
    });
  }

  editTeacher(username: string) {
    this.router.navigate(['edit/teacher', username]);
  }
}
