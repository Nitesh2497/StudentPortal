import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ShowStudentDetailComponent } from './show-student-detail/show-student-detail.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: 'listStudents/updateStudentDetails',
    component: UpdateStudentComponent
  },
  {
    path: 'listStudents/showStudentDetails',
    component: ShowStudentDetailComponent
  }, {
    path: 'listStudents',
    component: ListStudentsComponent
  }, {
    path: 'listStudents/addStudent',
    component: AddStudentComponent
  }, {
    path: 'listStudents/deleteStudent',
    component: DeleteStudentComponent
  },{
    path: 'listStudents/logout',
    component: LogoutComponent
  },{
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    ShowStudentDetailComponent,
    UpdateStudentComponent,
    LoginComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    NavbarComponent,
    FormValidationComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export class Login {
  username: string;
  password: string;
  name: string;
  phone: string;
  email: string;
}

export class Studentdetails {
  id: string;
  name: string;
  branch: string;
  cgpa: string;
  address: string;
  email: string;
  phone: string;
  landline: number;
}
