import { TestBed } from '@angular/core/testing';

import { DrawService } from './draw.service';

describe('DrawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawService = TestBed.inject(DrawService);
    expect(service).toBeTruthy();
  });
});
