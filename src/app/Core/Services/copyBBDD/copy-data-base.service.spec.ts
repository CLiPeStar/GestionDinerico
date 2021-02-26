import { TestBed } from '@angular/core/testing';

import { CopyDataBaseService } from './copy-data-base.service';

describe('CopyDataBaseService', () => {
  let service: CopyDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
