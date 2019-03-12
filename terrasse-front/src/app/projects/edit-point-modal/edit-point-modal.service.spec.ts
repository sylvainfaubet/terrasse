import { TestBed } from '@angular/core/testing';

import { EditPointModalService } from './edit-point-modal.service';
import { MatDialog } from '@angular/material';

describe('EditPointModalService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {
                provide: MatDialog,
                useValue: {},
            },
        ],
    }));

    it('should be created', () => {
        const service: EditPointModalService = TestBed.get(EditPointModalService);
        expect(service).toBeTruthy();
    });
});
