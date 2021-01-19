import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhotosCarruselComponent } from './form-photos-carrusel.component';

describe('FormPhotosCarruselComponent', () => {
  let component: FormPhotosCarruselComponent;
  let fixture: ComponentFixture<FormPhotosCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPhotosCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPhotosCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
