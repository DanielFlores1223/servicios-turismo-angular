import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAfiliadoComponent } from './dash-afiliado.component';

describe('DashAfiliadoComponent', () => {
  let component: DashAfiliadoComponent;
  let fixture: ComponentFixture<DashAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAfiliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
