import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {ShowStudentDetailComponent} from './show-student-detail/show-student-detail.component';
import {LoginComponent} from './login/login.component';
import {ListStudentsComponent} from './list-students/list-students.component';

export const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
