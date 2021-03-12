import { TestBed } from '@angular/core/testing';

import { EventosAdminGuard } from './eventos-admin.guard';

describe('EventosAdminGuard', () => {
  let guard: EventosAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventosAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
