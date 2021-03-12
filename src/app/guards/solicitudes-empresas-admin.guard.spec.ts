import { TestBed } from '@angular/core/testing';

import { SolicitudesEmpresasAdminGuard } from './solicitudes-empresas-admin.guard';

describe('SolicitudesEmpresasAdminGuard', () => {
  let guard: SolicitudesEmpresasAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SolicitudesEmpresasAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
