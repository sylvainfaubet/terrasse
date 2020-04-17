import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingComponent } from './saving.component';
import { Router } from '@angular/router';
import { DownloadService } from '@shared/services/download.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const DownloadServiceMock = jest.fn(() => ({ saveAsJson: jest.fn(), getFromJson: jest.fn() }));

describe('SavingComponent', () => {
  let component: SavingComponent;
  let fixture: ComponentFixture<SavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavingComponent],
      providers: [
        { provide: Router, useValue: {} },
        {
          provide: DownloadService, useValue: DownloadServiceMock
        }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
