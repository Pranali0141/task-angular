import { TestBed } from '@angular/core/testing';

import { TwubricService } from './twubric.service';

describe('TwubricService', () => {
  let service: TwubricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwubricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
