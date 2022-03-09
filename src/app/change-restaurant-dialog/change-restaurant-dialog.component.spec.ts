import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRestaurantDialogComponent } from './change-restaurant-dialog.component';

describe('ChangeRestaurantDialogComponent', () => {
  let component: ChangeRestaurantDialogComponent;
  let fixture: ComponentFixture<ChangeRestaurantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRestaurantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
