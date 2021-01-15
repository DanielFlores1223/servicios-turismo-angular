import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrohistoricoComponent } from './centrohistorico.component';

describe('CentrohistoricoComponent', () => {
  let component: CentrohistoricoComponent;
  let fixture: ComponentFixture<CentrohistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrohistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrohistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
