import { TestBed } from '@angular/core/testing';

import { SitiosAdminGuard } from './sitios-admin.guard';

describe('SitiosAdminGuard', () => {
  let guard: SitiosAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SitiosAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
