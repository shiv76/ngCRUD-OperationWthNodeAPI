import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService } from '../users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(private fb: FormBuilder,private usersService:UsersService) {
    this.createForm();
  }

  createForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      jobTitle: ['', Validators.required ]
    });
  }

   addUser(firstName, lastName, email,jobTitle) {
     debugger
     this.usersService.addUser(firstName, lastName, email,jobTitle);
   }

  ngOnInit(): void {
  }

}
