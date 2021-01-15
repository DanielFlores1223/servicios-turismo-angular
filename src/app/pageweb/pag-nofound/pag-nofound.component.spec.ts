import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNofoundComponent } from './pag-nofound.component';

describe('PagNofoundComponent', () => {
  let component: PagNofoundComponent;
  let fixture: ComponentFixture<PagNofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagNofoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagNofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
