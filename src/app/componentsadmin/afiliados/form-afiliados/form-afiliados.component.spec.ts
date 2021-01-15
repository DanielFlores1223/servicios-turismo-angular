import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAfiliadosComponent } from './form-afiliados.component';

describe('FormAfiliadosComponent', () => {
  let component: FormAfiliadosComponent;
  let fixture: ComponentFixture<FormAfiliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAfiliadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
