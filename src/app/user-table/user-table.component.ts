import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
       users: this.fb.array([])
    });
  }

  initiatForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobNumber: ['']
    });
  }

  addUser() {
   const control = <FormArray>this.userForm.get('users');
   control.push(this.initiatForm());
  }

  remove(index: number) {
    const control = <FormArray>this.userForm.get('users');
    control.removeAt(index);
  }

  save() {
    console.log(this.userForm.value);
  }

}
