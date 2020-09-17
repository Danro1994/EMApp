import { TestBed } from '@angular/core/testing';

import { Eventos2Service } from './eventos2.service';

describe('Eventos2Service', () => {
  let service: Eventos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eventos2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
