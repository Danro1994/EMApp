import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasEventoComponent } from './categorias-evento.component';

describe('CategoriasEventoComponent', () => {
  let component: CategoriasEventoComponent;
  let fixture: ComponentFixture<CategoriasEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
