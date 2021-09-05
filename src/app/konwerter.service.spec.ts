import { TestBed } from '@angular/core/testing';

import { KonwerterService } from './konwerter.service';

describe('KonwerterService', () => {
  let service: KonwerterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonwerterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
