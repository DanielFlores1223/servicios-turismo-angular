import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSitiosComponent } from './list-sitios.component';

describe('ListSitiosComponent', () => {
  let component: ListSitiosComponent;
  let fixture: ComponentFixture<ListSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
