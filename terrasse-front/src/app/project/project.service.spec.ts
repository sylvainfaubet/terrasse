import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { Router } from '@angular/router';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[{provide:Router,useValue:{}}]
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
