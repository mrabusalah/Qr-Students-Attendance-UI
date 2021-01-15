import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLectureAttendanceComponent } from './list-lecture-attendance.component';

describe('ListLectureAttendanceComponent', () => {
  let component: ListLectureAttendanceComponent;
  let fixture: ComponentFixture<ListLectureAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLectureAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLectureAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
