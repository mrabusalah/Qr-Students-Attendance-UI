import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CourseService} from '../../services/course.service';
import {Router} from '@angular/router';
import {Attendance} from '../../classes/Attendance';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-lecture-attendance',
  templateUrl: './list-lecture-attendance.component.html',
  styleUrls: ['./list-lecture-attendance.component.css']
})
export class ListLectureAttendanceComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'status'];
  dataSource: MatTableDataSource<Attendance>;
  attendance = [
    {id: 1, username: '31701001019', status: 'YES'},
    {id: 2, username: '31701001049', status: 'YES'},
    {id: 3, username: '31701001050', status: 'NO'},
    {id: 4, username: '31701001080', status: 'YES'},
    {id: 5, username: '31701001081', status: 'NO'},
    {id: 6, username: '31701001111', status: 'NO'},
    {id: 7, username: '31701001112', status: 'YES'},
    {id: 8, username: '31701001142', status: 'YES'},
    {id: 9, username: '31701001143', status: 'YES'},
    {id: 10, username: '31701001173', status: 'NO'},
    {id: 11, username: '31701001174', status: 'YES'},
    {id: 12, username: '31701001204', status: 'YES'},
    {id: 13, username: '31701001205', status: 'NO'}
  ];

  constructor(private courseService: CourseService,
              private router: Router) {
    this.dataSource = new MatTableDataSource(this.attendance);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Attendance>(this.attendance);
    // this.courseService.list()
    //   .subscribe(res => {
    //     this.dataSource = new MatTableDataSource<Attendance>(res);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }, error => {
    //     console.log(error);
    //   });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addAttendanceManually() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1']
    }).queue([
      {
        title: 'Add record manually',
        text: 'enter student username'
      }
    ]).then((result) => {
      if (result) {
        Swal.fire(
          'Done job!',
          'Record added to attendance!',
          'success'
        );
      }
    });
  }
}
