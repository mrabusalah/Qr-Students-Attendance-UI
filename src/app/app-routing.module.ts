import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from './not-found404/not-found404.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login-component/login/login.component';
import {ArticlesComponent} from './article-component/articles/articles.component';
import {SingleArticleComponent} from './article-component/single-article/single-article.component';
import {CreateArticleComponent} from './admin-component/create-article/create-article.component';
import {DeleteArticleComponent} from './admin-component/delete-article/delete-article.component';
import {StudentLoginComponent} from './login-component/student-login/student-login.component';
import {TeacherLoginComponent} from './login-component/teacher-login/teacher-login.component';
import {AdminLoginComponent} from './login-component/admin-login/admin-login.component';
import {AdminAuthGuard} from './guards/admin-auth.guard';
import {AdminHomeComponent} from './home/admin-home/admin-home.component';
import {LoggedInAuthGuard} from './guards/logged-in-auth.guard';
import {ListStudentsComponent} from './admin-component/list-students/list-students.component';
import {CreateStudentComponent} from './admin-component/create-student/create-student.component';
import {EditStudentComponent} from './admin-component/edit-student/edit-student.component';
import {ListTeachersComponent} from './admin-component/list-teachers/list-teachers.component';
import {CreateTeacherComponent} from './admin-component/create-teacher/create-teacher.component';
import {EditTeacherComponent} from './admin-component/edit-teacher/edit-teacher.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'student/login', component: StudentLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'teacher/login', component: TeacherLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'admin/login', component: AdminLoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'home/admin', component: AdminHomeComponent, canActivate: [AdminAuthGuard]},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: SingleArticleComponent},
  {path: 'create/article', component: CreateArticleComponent, canActivate: [AdminAuthGuard]},
  {path: 'create/student', component: CreateStudentComponent, canActivate: [AdminAuthGuard]},
  {path: 'create/teacher', component: CreateTeacherComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/article', component: DeleteArticleComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/student', component: ListStudentsComponent, canActivate: [AdminAuthGuard]},
  {path: 'list/teacher', component: ListTeachersComponent, canActivate: [AdminAuthGuard]},
  {path: 'edit/student/:username', component: EditStudentComponent, canActivate: [AdminAuthGuard]},
  {path: 'edit/teacher/:username', component: EditTeacherComponent, canActivate: [AdminAuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
