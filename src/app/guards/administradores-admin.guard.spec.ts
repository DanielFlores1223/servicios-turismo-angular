import { TestBed } from '@angular/core/testing';

import { AdministradoresAdminGuard } from './administradores-admin.guard';

describe('AdministradoresAdminGuard', () => {
  let guard: AdministradoresAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdministradoresAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
