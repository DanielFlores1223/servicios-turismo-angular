import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjuanComponent } from './sanjuan.component';

describe('SanjuanComponent', () => {
  let component: SanjuanComponent;
  let fixture: ComponentFixture<SanjuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
