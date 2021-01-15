import { TestBed } from '@angular/core/testing';

import { GuarloginGuard } from './guarlogin.guard';

describe('GuarloginGuard', () => {
  let guard: GuarloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuarloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
