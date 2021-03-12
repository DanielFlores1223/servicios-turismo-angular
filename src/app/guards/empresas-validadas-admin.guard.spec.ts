import { TestBed } from '@angular/core/testing';

import { EmpresasValidadasAdminGuard } from './empresas-validadas-admin.guard';

describe('EmpresasValidadasAdminGuard', () => {
  let guard: EmpresasValidadasAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpresasValidadasAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
