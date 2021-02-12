import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasGeneralComponent } from './empresas-general.component';

describe('EmpresasGeneralComponent', () => {
  let component: EmpresasGeneralComponent;
  let fixture: ComponentFixture<EmpresasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
