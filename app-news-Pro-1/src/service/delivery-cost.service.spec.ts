import { TestBed } from '@angular/core/testing';

import { DeliveryCostService } from './delivery-cost.service';

describe('DeliveryCostService', () => {
  let service: DeliveryCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
