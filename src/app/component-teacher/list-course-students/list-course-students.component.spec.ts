import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseStudentsComponent } from './list-course-students.component';

describe('ListCourseStudentsComponent', () => {
  let component: ListCourseStudentsComponent;
  let fixture: ComponentFixture<ListCourseStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
