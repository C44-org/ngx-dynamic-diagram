import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIconsComponent } from './dashboard-icons.component';

describe('IconsComponent', () => {
  let component: DashboardIconsComponent;
  let fixture: ComponentFixture<DashboardIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
