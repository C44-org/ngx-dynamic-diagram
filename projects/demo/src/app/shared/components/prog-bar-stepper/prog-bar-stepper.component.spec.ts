import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgBarStepperComponent } from './prog-bar-stepper.component';

describe('ProgBarStepperComponent', () => {
  let component: ProgBarStepperComponent;
  let fixture: ComponentFixture<ProgBarStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgBarStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgBarStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
