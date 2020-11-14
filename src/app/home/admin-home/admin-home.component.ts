import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
