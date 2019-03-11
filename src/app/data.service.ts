import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL  =  'http://localhost/mess-api';
  constructor(private http: HttpClient) { }

  //1
  postlogin($formdata)
  {
    return this.http.post(`${this.API_URL}/login.php`,$formdata);
  }
  //2
  loggedin()
  {
    return !!localStorage.getItem('token')
  }
  //3
  gettoken()
  {
    return localStorage.getItem('token')
  }
  //3
  listofstudents()
  {
    return this.http.post(`${this.API_URL}/student_list.php`,123);
  }
  //4
  noofstudentactive()
  {
    return this.http.post(`${this.API_URL}/no-of-students-active.php`,123);
  }

}
