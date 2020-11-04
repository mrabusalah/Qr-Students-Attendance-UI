import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from './not-found404/not-found404.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: NotFound404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
