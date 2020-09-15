import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoriaEventoComponent } from './editar-categoria-evento.component';

describe('EditarCategoriaEventoComponent', () => {
  let component: EditarCategoriaEventoComponent;
  let fixture: ComponentFixture<EditarCategoriaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCategoriaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCategoriaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
