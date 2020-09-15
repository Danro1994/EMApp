import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaEventoComponent } from './crear-categoria-evento.component';

describe('CrearCategoriaEventoComponent', () => {
  let component: CrearCategoriaEventoComponent;
  let fixture: ComponentFixture<CrearCategoriaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCategoriaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCategoriaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
