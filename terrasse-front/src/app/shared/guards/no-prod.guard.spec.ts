import { TestBed, inject } from '@angular/core/testing';

import { NoProdGuard } from './no-prod.guard';

describe('NoProdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoProdGuard]
    });
  });

  it('should ...', inject([NoProdGuard], (guard: NoProdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
