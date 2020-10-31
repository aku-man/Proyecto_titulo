import { TestBed } from '@angular/core/testing';

import { PictogramasService } from './pictogramas.service';

describe('PictogramasService', () => {
  let service: PictogramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictogramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
