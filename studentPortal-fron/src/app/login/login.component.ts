import { Component, OnInit } from '@angular/core';
import {Login} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  };

  loggedIn = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  sendFeedback(): void {
  const url = 'http://192.168.33.10:8080/login';
  this.http.post<boolean>(url, this.login).subscribe(res => {
    if (res === true) {
    console.log('Logged In');
    this.loggedIn = true;
    this.router.navigate(['listStudents']);
    } else {
      this.loggedIn = false;
      console.log('Not Logged in');
    }
  }, err => {
    alert('Error');
  });
}

toggleVisible(){

}
}
