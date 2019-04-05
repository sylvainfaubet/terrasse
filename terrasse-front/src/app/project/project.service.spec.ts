import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [{provide: Router, useValue: {}}]
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
