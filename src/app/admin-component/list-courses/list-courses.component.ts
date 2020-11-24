import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Course} from '../../classes/Course';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CourseService} from '../../services/course.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'section', 'time', 'hours', 'action'];
  dataSource: MatTableDataSource<Course>;
  course: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private courseService: CourseService,
              private router: Router) {
    this.dataSource = new MatTableDataSource(this.course);
  }

  ngOnInit() {
    this.courseService.list()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Course>(res);
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

  deleteCourse(id: number) {
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
        this.courseService.deleteCourseById(id)
          .subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: 'Done...',
              text: 'Course deleted successfully!',
            });
            this.ngOnInit();
          }, error => {
            Swal.fire({
              icon: 'error',
              title: 'Opps...',
              text: 'There is an issue with deleting Course!',
            });
            console.log(error);
          });
      }
    });
  }

  editCourse(id: string) {
    this.router.navigate(['edit/course', id]);
  }
}
