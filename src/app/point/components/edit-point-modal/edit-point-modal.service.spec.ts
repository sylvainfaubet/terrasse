import { TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { EditPointModalService } from './edit-point-modal.service';

describe('EditPointModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: MatDialog,
        useValue: {}
      }
    ]
  }));

  it('should be created', () => {
    const service: EditPointModalService = TestBed.inject(EditPointModalService);
    expect(service).toBeTruthy();
  });
});
