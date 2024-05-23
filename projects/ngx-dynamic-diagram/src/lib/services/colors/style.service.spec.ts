import { TestBed } from '@angular/core/testing';

import { StyleService } from './style.service';

describe('ColorsService', () => {
  let service: StyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
