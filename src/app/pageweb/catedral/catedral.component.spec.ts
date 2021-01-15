import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedralComponent } from './catedral.component';

describe('CatedralComponent', () => {
  let component: CatedralComponent;
  let fixture: ComponentFixture<CatedralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatedralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatedralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
