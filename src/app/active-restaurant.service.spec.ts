import { TestBed } from '@angular/core/testing';

import { ActiveRestaurantService } from './active-restaurant.service';

describe('ActiveRestaurantService', () => {
  let service: ActiveRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
