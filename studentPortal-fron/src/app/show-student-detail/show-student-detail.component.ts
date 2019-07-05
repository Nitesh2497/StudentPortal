import { Component, OnInit } from '@angular/core';
import {Studentdetails} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';
import {ListStudentsComponent} from '../list-students/list-students.component';

@Component({
  selector: 'app-show-student-detail',
  templateUrl: './show-student-detail.component.html',
  styleUrls: ['./show-student-detail.component.css']
})
export class ShowStudentDetailComponent implements OnInit {
  constructor(private http: HttpClient, private StudentService: StudentServiceService, private router: Router) {
  }
  // static studid: string;

  students: Studentdetails;

  ngOnInit() {
    this.fetchStudent();
  }

  fetchStudent(): void {
    this.StudentService.getStudent(ListStudentsComponent.studentId).subscribe((res: any) => {
      this.students = res;
    });
  }

}
