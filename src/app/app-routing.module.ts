import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './modules/create-survey/component/create/create.component';
import { HomeComponent } from './modules/home/component/home/home.component';
import { ResponseComponent } from './modules/response/component/response/response.component';

const routes: Routes = [
  { path: 'createSurvey', component: CreateComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'response', component: ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
