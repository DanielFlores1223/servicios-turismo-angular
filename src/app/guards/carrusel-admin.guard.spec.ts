import { TestBed } from '@angular/core/testing';

import { CarruselAdminGuard } from './carrusel-admin.guard';

describe('CarruselAdminGuard', () => {
  let guard: CarruselAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarruselAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
