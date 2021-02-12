import { TestBed } from '@angular/core/testing';

import { GuaradminGuard } from './guaradmin.guard';

describe('GuaradminGuard', () => {
  let guard: GuaradminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuaradminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
