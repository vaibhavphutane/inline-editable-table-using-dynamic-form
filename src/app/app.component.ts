import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {

  }

}
