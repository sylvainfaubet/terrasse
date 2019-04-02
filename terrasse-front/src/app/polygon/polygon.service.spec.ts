import { TestBed, inject } from '@angular/core/testing';

import { PolygonService } from './polygon.service';

describe('PolygonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolygonService]
    });
  });

  it('should be created', inject([PolygonService], (service: PolygonService) => {
    expect(service).toBeTruthy();
  }));
});
