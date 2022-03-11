import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRestaurantComponent } from './pick-restaurant.component';

describe('PickRestaurantComponent', () => {
  let component: PickRestaurantComponent;
  let fixture: ComponentFixture<PickRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
