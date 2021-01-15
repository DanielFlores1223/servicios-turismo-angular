import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContDashboardComponent } from './cont-dashboard.component';

describe('ContDashboardComponent', () => {
  let component: ContDashboardComponent;
  let fixture: ComponentFixture<ContDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
