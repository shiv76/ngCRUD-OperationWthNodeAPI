import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { User } from '../User';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
    });
  }

  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe(res => {
      this.users.splice(id, 1);
    });
  }

}
