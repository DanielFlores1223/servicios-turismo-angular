import { TestBed } from '@angular/core/testing';

import { GuarpageWebGuard } from './guarpage-web.guard';

describe('GuarpageWebGuard', () => {
  let guard: GuarpageWebGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuarpageWebGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
