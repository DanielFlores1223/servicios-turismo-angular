import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSitiosComponent } from './form-sitios.component';

describe('FormSitiosComponent', () => {
  let component: FormSitiosComponent;
  let fixture: ComponentFixture<FormSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
