import { Component, OnInit } from '@angular/core';
import {Studentdetails} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';
import {ListStudentsComponent} from '../list-students/list-students.component';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Studentdetails = new Studentdetails();
  constructor(private http: HttpClient, private studentService: StudentServiceService, private router: Router) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.getStudent(ListStudentsComponent.studentId).subscribe(res => {
      this.student = res;
      console.log('Got Student Details back');
    });
  }

  updateStudent(student: Studentdetails) {
    this.studentService.addStudent(student).subscribe(res => {
      if (res === true) {
        console.log('Student Details Updated');
        this.router.navigate(['listStudents']);
      } else {
        alert('Student cannot update details');
      }
    });
  }
}
