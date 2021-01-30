import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  updateUserForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute,
     private router: Router, private usersService: UsersService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.updateUserForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      jobTitle: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.usersService.editUser(params.id).subscribe(res => {
          this.user = res;
      });
    });
  }

  updateUser(firstName, lastName, email,jobTitle) {
    this.route.params.subscribe(params => {
      this.usersService.updateUser(firstName, lastName, email,jobTitle, params.id);
      this.router.navigate(['users']);
    });
  }
}
