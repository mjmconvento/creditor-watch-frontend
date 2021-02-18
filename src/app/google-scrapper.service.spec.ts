import { TestBed } from '@angular/core/testing';

import { GoogleScrapperService } from './google-scrapper.service';

describe('GoogleScrapperService', () => {
  let service: GoogleScrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleScrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
