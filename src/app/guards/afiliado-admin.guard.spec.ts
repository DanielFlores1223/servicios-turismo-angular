import { TestBed } from '@angular/core/testing';

import { AfiliadoAdminGuard } from './afiliado-admin.guard';

describe('AfiliadoAdminGuard', () => {
  let guard: AfiliadoAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfiliadoAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
