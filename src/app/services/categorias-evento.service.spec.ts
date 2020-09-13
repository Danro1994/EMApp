import { TestBed } from '@angular/core/testing';

import { CategoriasEventoService } from './categorias-evento.service';

describe('CategoriasEventoService', () => {
  let service: CategoriasEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
