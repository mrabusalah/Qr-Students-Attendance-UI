import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from './not-found404/not-found404.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login-component/login/login.component';
import {ArticlesComponent} from './component-article/articles/articles.component';
import {SingleArticleComponent} from './component-article/single-article/single-article.component';
import {CreateArticleComponent} from './component-admin/create-article/create-article.component';
import {DeleteArticleComponent} from './component-admin/delete-article/delete-article.component';
import {StudentLoginComponent} from './login-component/student-login/student-login.component';
import {TeacherLoginComponent} from './login-component/teacher-login/teacher-login.component';
import {AdminLoginComponent} from './login-component/admin-login/admin-login.component';
import {AdminAuthGuard} from './guards/admin-auth.guard';
import {AdminHomeComponent} from './home/admin-home/admin-home.component';
import {LoggedInAuthGuard} from './guards/logged-in-auth.guard';
import {ListStudentsComponent} from './component-admin/list-students/list-students.component';
import {CreateStudentComponent} from './component-admin/create-student/create-student.component';
import {EditStudentComponent} from './component-admin/edit-student/edit-student.component';
import {ListTeachersComponent} from './component-admin/list-teachers/list-teachers.component';
import {CreateTeacherComponent} from './component-admin/create-teacher/create-teacher.component';
import {EditTeacherComponent} from './component-admin/edit-teacher/edit-teacher.component';
import {CreateCourseComponent} from './component-admin/create-course/create-course.component';
import {ListCoursesComponent} from './component-admin/list-courses/list-courses.component';
import {EditCourseComponent} from './component-admin/edit-course/edit-course.component';
import {ScanComponent} from './component-student/scan/scan.component';
import {StudentAuthGuard} from './guards/student-auth.guard';
import {TeacherHomeComponent} from './home/teacher-home/teacher-home.component';
import {TeacherAuthGuard} from './guards/teacher-auth.guard';
import {ListCourseStudentsComponent} from './component-teacher/list-course-students/list-course-students.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ListCourseLecturesComponent} from './component-teacher/list-course-lectures/list-course-lectures.component';
import {ListLectureAttendanceComponent} from './component-teacher/list-lecture-attendance/list-lecture-attendance.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'student/login', component: StudentLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'teacher/login', component: TeacherLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'admin/login', component: AdminLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'home/admin', component: AdminHomeComponent, canActivate: [AdminAuthGuard]},
  {path: 'home/teacher', component: TeacherHomeComponent, canActivate: [TeacherAuthGuard]},
  {path: 'home/scan', component: ScanComponent, canActivate: [StudentAuthGuard]},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: SingleArticleComponent},
  {path: 'create/article', component: CreateArticleComponent, canActivate: [AdminAuthGuard]},
  {path: 'create/student', component: CreateStudentComponent, canActivate: [AdminAuthGuard]},
  {path: 'create/teacher', component: CreateTeacherComponent, canActivate: [AdminAuthGuard]},
  {path: 'create/course', component: CreateCourseComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/article', component: DeleteArticleComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/student', component: ListStudentsComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/teacher', component: ListTeachersComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/course', component: ListCoursesComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/course-students/:id', component: ListCourseStudentsComponent, canActivate: [TeacherAuthGuard]},
  {path: 'list/course-lectures/:id', component: ListCourseLecturesComponent, canActivate: [TeacherAuthGuard]},
  {path: 'list/lectures-attendance/:id', component: ListLectureAttendanceComponent, canActivate: [TeacherAuthGuard]},
  {path: 'edit/student/:username', component: EditStudentComponent, canActivate: [AdminAuthGuard]},
  {path: 'edit/teacher/:username', component: EditTeacherComponent, canActivate: [AdminAuthGuard]},
  {path: 'edit/course/:id', component: EditCourseComponent, canActivate: [AdminAuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
