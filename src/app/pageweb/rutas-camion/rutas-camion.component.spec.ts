import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasCamionComponent } from './rutas-camion.component';

describe('RutasCamionComponent', () => {
  let component: RutasCamionComponent;
  let fixture: ComponentFixture<RutasCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
