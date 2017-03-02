import { TestBed, inject } from '@angular/core/testing';

import { JournalserviceService } from './journalservice.service';

describe('JournalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalserviceService]
    });
  });

  it('should ...', inject([JournalserviceService], (service: JournalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
