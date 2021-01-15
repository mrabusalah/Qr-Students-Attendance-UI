import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login-component/login/login.component';
import {ArticlesComponent} from './component-article/articles/articles.component';
import {SingleArticleComponent} from './component-article/single-article/single-article.component';
import {CreateArticleComponent} from './component-admin/create-article/create-article.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {DeleteArticleComponent} from './component-admin/delete-article/delete-article.component';
import {StudentLoginComponent} from './login-component/student-login/student-login.component';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {TeacherLoginComponent} from './login-component/teacher-login/teacher-login.component';
import {AdminLoginComponent} from './login-component/admin-login/admin-login.component';
import {AdminHomeComponent} from './home/admin-home/admin-home.component';
import {ListStudentsComponent} from './component-admin/list-students/list-students.component';
import {CreateStudentComponent} from './component-admin/create-student/create-student.component';
import {EditStudentComponent} from './component-admin/edit-student/edit-student.component';
import {MatSelectModule} from '@angular/material/select';
import {ListTeachersComponent} from './component-admin/list-teachers/list-teachers.component';
import {CreateTeacherComponent} from './component-admin/create-teacher/create-teacher.component';
import {EditTeacherComponent} from './component-admin/edit-teacher/edit-teacher.component';
import {CreateCourseComponent} from './component-admin/create-course/create-course.component';
import {ListCoursesComponent} from './component-admin/list-courses/list-courses.component';
import {EditCourseComponent} from './component-admin/edit-course/edit-course.component';
import {ScanComponent} from './component-student/scan/scan.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {TeacherHomeComponent} from './home/teacher-home/teacher-home.component';
import {ListCourseStudentsComponent} from './component-teacher/list-course-students/list-course-students.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ListCourseLecturesComponent} from './component-teacher/list-course-lectures/list-course-lectures.component';
import {ListLectureAttendanceComponent} from './component-teacher/list-lecture-attendance/list-lecture-attendance.component';

@NgModule({
  exports: [MatSliderModule]
  ,
  declarations: [
    AppComponent,
    NotFound404Component,
    AboutUsComponent,
    LoginComponent,
    ArticlesComponent,
    SingleArticleComponent,
    CreateArticleComponent,
    DeleteArticleComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    ListStudentsComponent,
    CreateStudentComponent,
    EditStudentComponent,
    ListTeachersComponent,
    CreateTeacherComponent,
    EditTeacherComponent,
    CreateCourseComponent,
    ListCoursesComponent,
    EditCourseComponent,
    ScanComponent,
    TeacherHomeComponent,
    ListCourseStudentsComponent,
    ContactUsComponent,
    ListCourseLecturesComponent,
    ListLectureAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
    MatSelectModule,
    ZXingScannerModule
  ],

  providers: [HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
