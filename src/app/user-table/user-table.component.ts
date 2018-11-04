import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { validateEmail } from './user-table.validators';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  employee = [
    {
      name: 'tuna',
      email: 'vscode@gmail.com',
      mobNumber: 12346,
      dob: new Date()
    },
    {
      name: 'node',
      email: 'nodejs@gmail.com',
      mobNumber: 1234,
      dob: new Date()
    },
    {
      name: 'google',
      email: 'google@gmail.com',
      mobNumber: 123461,
      dob: new Date()
    }
  ];

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      users: this.fb.array([])
    });
    this.getEmployee();
  }

  getEmployee() {
    const control = <FormArray>this.userForm.get('users');
    for (const emp of this.employee) {
      const grp = this.fb.group({
        name: [emp.name, Validators.required],
        email: [emp.email, [Validators.required, validateEmail]],
        mobNumber: [emp.mobNumber, [Validators.min(10)]],
        dob: [emp.dob, Validators.required]
      });
      control.push(grp);
    }
  }

  initiatForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, validateEmail, Validators.email]],
      mobNumber: ['', [Validators.min(10)]],
      dob: ['']
    });
  }

  get getFormData(): FormArray {
    return <FormArray>this.userForm.get('users');
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
    console.log('isValid', this.userForm.valid);
    console.log('value', this.userForm.value);
  }
}
