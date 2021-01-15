import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSitiosComponent } from './edit-sitios.component';

describe('EditSitiosComponent', () => {
  let component: EditSitiosComponent;
  let fixture: ComponentFixture<EditSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
