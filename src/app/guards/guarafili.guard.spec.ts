import { TestBed } from '@angular/core/testing';

import { GuarafiliGuard } from './guarafili.guard';

describe('GuarafiliGuard', () => {
  let guard: GuarafiliGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuarafiliGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
