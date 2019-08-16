import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  
  step: FormGroup
  @Output('onFormChange') onFormChange = new Subject();

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.step = this._formBuilder.group({
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.onFormChange.next(this.step);
    this.step.statusChanges.subscribe(val => {
      this.onFormChange.next(this.step)
    });
  }

}