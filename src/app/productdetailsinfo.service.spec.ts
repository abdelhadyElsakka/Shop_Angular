import { TestBed } from '@angular/core/testing';

import { ProductdetailsinfoService } from './productdetailsinfo.service';

describe('ProductdetailsinfoService', () => {
  let service: ProductdetailsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdetailsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
