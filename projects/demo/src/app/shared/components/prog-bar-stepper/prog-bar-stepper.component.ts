import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'prog-bar-stepper',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './prog-bar-stepper.component.html',
  styleUrl: './prog-bar-stepper.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ProgBarStepperComponent,
      multi: true
    }
  ]
})
export class ProgBarStepperComponent implements ControlValueAccessor {
  @Input() value: number = 0
  @Input() elementtype: string = '%'
  @Input() min: number = 0
  @Input() max: number = 100
  @Input() step: number = 10
  
  disabled: boolean = false

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(value: any): void {
    this.value = value
    console.log('writeValue', value)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled)
    this.disabled = isDisabled
  }

  calcValueInPercent(): number {
    return (this.value - this.min) / (this.max - this.min) * 100
  }

  decrease(dec: number = 1) {
    if (this.disabled) return
    if (this.value - dec <= this.min) {
      this.value = this.min
      return
    }
    this.value = this.value - dec
    this.onChange(this.value)
  }
  increase(inc: number = 1) {
    if (this.disabled) return
    if (this.value + inc >= this.max) {
      this.value = this.max
      return
    }
    this.value = this.value + inc
    this.onChange(this.value)
  }
}
