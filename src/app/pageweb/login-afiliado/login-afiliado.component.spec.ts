import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAfiliadoComponent } from './login-afiliado.component';

describe('LoginAfiliadoComponent', () => {
  let component: LoginAfiliadoComponent;
  let fixture: ComponentFixture<LoginAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAfiliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
