import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseLecturesComponent } from './list-course-lectures.component';

describe('ListCourseLecturesComponent', () => {
  let component: ListCourseLecturesComponent;
  let fixture: ComponentFixture<ListCourseLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseLecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
