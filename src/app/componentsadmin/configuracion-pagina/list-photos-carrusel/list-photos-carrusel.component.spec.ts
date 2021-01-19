import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotosCarruselComponent } from './list-photos-carrusel.component';

describe('ListPhotosCarruselComponent', () => {
  let component: ListPhotosCarruselComponent;
  let fixture: ComponentFixture<ListPhotosCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhotosCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhotosCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
