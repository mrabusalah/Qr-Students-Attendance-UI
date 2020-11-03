import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from './not-found404/not-found404.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/404'},
  {path: '404', component: NotFound404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
