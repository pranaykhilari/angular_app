import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  baseUrl = environment.baseUrl;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  createStudent(Name, Email, phoneNum) {
    const url = this.baseUrl + 'student/add';
    const input = {
      name: Name,
      email: Email,
      // tslint:disable-next-line:radix
      phone_num: parseInt(phoneNum)
    };
    return this.http.post(url, input, this.httpOptions);
  }

  getStudents() {
    const url = this.baseUrl + 'student/get';
    return this.http.get(url, this.httpOptions);
  }
  getStudent(id) {
    const url = this.baseUrl + 'student/edit/' + id;
    return this.http.get(url, this.httpOptions);
  }

  editStudent(Name, Email, Phone, id) {
    const url = this.baseUrl + 'student/edit/' + id;
    const obj = {
      name: Name,
      email: Email,
      // tslint:disable-next-line:radix
      phone_num: parseInt(Phone)
    };
    return this.http.put(url, obj, this.httpOptions);
  }

  deleteStudent(id) {
    const url = this.baseUrl + 'student/delete/' + id;
    return this.http.delete(url, this.httpOptions);
  }

}
