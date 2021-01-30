import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  addUser(firstName, lastName, email,jobTitle) {
    debugger
    console.log(firstName, lastName, email,jobTitle);
    const obj = {
      firstName,
      lastName,
      email,
      jobTitle
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateUser(firstName, lastName, email,jobTitle,id) {
    const obj = {
      firstName,
      lastName,
      email,
      jobTitle
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Completed'));
  }

  deleteUser(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
