import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicDiagramComponent } from './ngx-dynamic-diagram.component';

describe('NgxDynamicDiagramComponent', () => {
  let component: NgxDynamicDiagramComponent;
  let fixture: ComponentFixture<NgxDynamicDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicDiagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxDynamicDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
