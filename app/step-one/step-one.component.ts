import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  step: FormGroup;
  @Output('onFormChange') onFormChange = new Subject();
  constructor( 
    private _formBuilder: FormBuilder
  ) {
    this.step = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      extraName: ''
    });
  }

  ngOnInit() {
    this.onFormChange.next(this.step);
    this.step.statusChanges.subscribe(val => {
      this.onFormChange.next(this.step)
    });
  }
}