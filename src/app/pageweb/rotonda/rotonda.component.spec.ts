import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotondaComponent } from './rotonda.component';

describe('RotondaComponent', () => {
  let component: RotondaComponent;
  let fixture: ComponentFixture<RotondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
