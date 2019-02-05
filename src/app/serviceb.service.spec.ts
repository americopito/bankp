import { TestBed, inject } from '@angular/core/testing';

import { ServicebService } from './serviceb.service';

describe('ServicebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicebService]
    });
  });

  it('should be created', inject([ServicebService], (service: ServicebService) => {
    expect(service).toBeTruthy();
  }));
});
