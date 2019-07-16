import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {STUDENTS} from './mock-student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Studentdetails} from './app.module';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
   // students: Student[] = STUDENTS;
  constructor(private http: HttpClient) { }

  public getStudentList(): any {
    const url = 'http://localhost:8080/listStudents';
    return this.http.get(url);
  }

public getStudent(id: string): any {
    const url = 'http://localhost:8080/listStudents/showStudentDetails/' + id;
    return this.http.get(url);
}

public addStudent(student: Studentdetails): any {
  const url = 'http://localhost:8080/listStudents/addStudent';
  return this.http.post<boolean>(url, student);
}

public deleteStudent(id: string): any {
  const url = 'http://localhost:8080/listStudents/deleteStudent/' + id;
  return this.http.get(url);
}

}
