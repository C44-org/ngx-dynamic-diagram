import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProgBarStepperComponent } from '../components/prog-bar-stepper/prog-bar-stepper.component';


@Component({
  selector: 'app-svgbar',
  standalone: true,
  imports: [
    CommonModule,
    ProgBarStepperComponent,
    ReactiveFormsModule
  ],
  templateUrl: './svgbar.component.html',
  styleUrl: './svgbar.component.sass'
})
export class SvgbarComponent {
  value: number = 2
  maxvalue: number = 4
  radius = 54
  circumference = 2 * Math.PI * this.radius
  dashoffset: number = 0

  // progressbar svg
  percent = 50
  color = 1

  // progresgauge svg
  private progress(value: number, maxvalue: number) {
    const progress = value / maxvalue
    this.dashoffset = this.circumference * (1 - progress)
  }

  // form
  progressBarForm: FormGroup

  constructor() {
    this.progressBarForm = new FormGroup({
      text: new FormControl({ value: 'Hello World!', disabled: false }),
      progressBar: new FormControl({ value: 0, disabled: false }),
      dynProgressBar: new FormControl({ value: 412, disabled: false }),
    })

    this.progress(0, this.maxvalue)
  }
}
