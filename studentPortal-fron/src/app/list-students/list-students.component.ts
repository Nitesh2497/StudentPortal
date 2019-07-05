import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {STUDENTS} from '../mock-student';
import {StudentServiceService} from '../student-service.service';
import {Studentdetails} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ShowStudentDetailComponent} from '../show-student-detail/show-student-detail.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studService: StudentServiceService, private http: HttpClient, private router: Router) { }
  static studentId: string;

  students: Studentdetails[];

  ngOnInit() {
    this.fetchStudents();
  }
  public fetchStudents(): void {
    this.studService.getStudentList().subscribe((stud: any[]) => {
      this.students = stud;
    });
  }

  sendId(id: string) {
    ListStudentsComponent.studentId = id;
  }

  deleteStudent(id: string) {
    this.studService.deleteStudent(id).subscribe(stud => {
      if (stud === true) {
        console.log('Student Deleted');
        this.ngOnInit();
      }
    });
  }
}
