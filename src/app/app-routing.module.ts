import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { FirstHomeworkComponent } from './work/first-homework/first-homework.component';
import { SecondHomeworkComponent } from './work/second-homework/second-homework.component';
import { ThirdHomeworkComponent } from './work/third-homework/third-homework.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'work/cenzor', component: FirstHomeworkComponent},
  {path: 'work/userlist', component: SecondHomeworkComponent},
  {path: 'work/tasklist', component: ThirdHomeworkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
