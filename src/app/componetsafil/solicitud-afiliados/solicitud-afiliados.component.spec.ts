import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAfiliadosComponent } from './solicitud-afiliados.component';

describe('SolicitudAfiliadosComponent', () => {
  let component: SolicitudAfiliadosComponent;
  let fixture: ComponentFixture<SolicitudAfiliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAfiliadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
