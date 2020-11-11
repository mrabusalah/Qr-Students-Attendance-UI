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
import {ArticlesComponent} from './article-component/articles/articles.component';
import {SingleArticleComponent} from './article-component/single-article/single-article.component';
import {CreateArticleComponent} from './article-component/create-article/create-article.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {DeleteArticleComponent} from './article-component/delete-article/delete-article.component';
import {StudentLoginComponent} from './login-component/student-login/student-login.component';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { TeacherLoginComponent } from './login-component/teacher-login/teacher-login.component';


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
    TeacherLoginComponent
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
    SweetAlert2Module
  ],

  providers: [HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
