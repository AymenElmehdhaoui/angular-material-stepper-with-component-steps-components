import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css']
})
export class StepperOverviewExample {
  @ViewChild('stepper') stepper: MatStepper;
  isStepTwoOptionnal = false;
  isLinear = true;
  stepOne = this._formBuilder.group({});
  stepTwo = this._formBuilder.group({});
  stepThree = this._formBuilder.group({});
  data: {stepOne: any, stepTwo: any, stepThree: any} = {stepOne: {}, stepTwo: {}, stepThree: {}};
  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepThree = this._formBuilder.group({
      description: ['']
    });
  }

  formChangeStepOne(event: FormGroup) {
    this.stepOne = event;
    this.data.stepOne = this.stepOne.value;
  }

  formChangeStepTwo(event: FormGroup) {
    this.stepTwo = event;
    this.data.stepTwo = event.value;
  }

  ngOnInit() {
    this.stepThree
        .valueChanges
        .subscribe(val => this.data.stepThree = this.stepThree.value);
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
    event.stopPropagation();
  }

  setOptionalStepTwo() {
    this.isStepTwoOptionnal = true;
  }
}
