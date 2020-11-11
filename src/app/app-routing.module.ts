import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from './not-found404/not-found404.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login-component/login/login.component';
import {ArticlesComponent} from './article-component/articles/articles.component';
import {SingleArticleComponent} from './article-component/single-article/single-article.component';
import {CreateArticleComponent} from './article-component/create-article/create-article.component';
import {DeleteArticleComponent} from './article-component/delete-article/delete-article.component';
import {StudentLoginComponent} from './login-component/student-login/student-login.component';
import {TeacherLoginComponent} from './login-component/teacher-login/teacher-login.component';
import {AdminLoginComponent} from './login-component/admin-login/admin-login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'student/login', component: StudentLoginComponent},
  {path: 'teacher/login', component: TeacherLoginComponent},
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: SingleArticleComponent},
  {path: 'create/article', component: CreateArticleComponent},
  {path: 'list/article', component: DeleteArticleComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: NotFound404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
