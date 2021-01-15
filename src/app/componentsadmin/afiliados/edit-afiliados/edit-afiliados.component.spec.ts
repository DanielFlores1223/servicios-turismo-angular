import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAfiliadosComponent } from './edit-afiliados.component';

describe('EditAfiliadosComponent', () => {
  let component: EditAfiliadosComponent;
  let fixture: ComponentFixture<EditAfiliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAfiliadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
