import { TestBed } from '@angular/core/testing';

import { AnotacionesService } from './anotaciones.service';

describe('AnotacionesService', () => {
  let service: AnotacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
