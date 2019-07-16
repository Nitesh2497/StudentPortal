import { Component, OnInit } from '@angular/core';
import {Studentdetails} from '../app.module';
import {StudentServiceService} from '../student-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Studentdetails = new Studentdetails();
  constructor(private studentService: StudentServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addStudent(student: Studentdetails): void {
   // this.studentService.addStudent(student).subscribe(res => {
    const url = 'http://localhost:8080/listStudents/addStudent';
    this.http.post(url, student).subscribe(res => {
      if (res === true) {
        console.log('Student Details Added');
        this.router.navigate(['listStudents']);
      } else {
        alert('Student cannot update details');
      }
    });
  }
}
