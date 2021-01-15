import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasSitiosComponent } from './mas-sitios.component';

describe('MasSitiosComponent', () => {
  let component: MasSitiosComponent;
  let fixture: ComponentFixture<MasSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
