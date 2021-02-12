import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpresasAdminComponent } from './edit-empresas-admin.component';

describe('EditEmpresasAdminComponent', () => {
  let component: EditEmpresasAdminComponent;
  let fixture: ComponentFixture<EditEmpresasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpresasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpresasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
