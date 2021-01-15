import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAfiliadosComponent } from './list-afiliados.component';

describe('ListAfiliadosComponent', () => {
  let component: ListAfiliadosComponent;
  let fixture: ComponentFixture<ListAfiliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAfiliadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
