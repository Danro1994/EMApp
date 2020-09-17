import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuario2Component } from './editar-usuario2.component';

describe('EditarUsuario2Component', () => {
  let component: EditarUsuario2Component;
  let fixture: ComponentFixture<EditarUsuario2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUsuario2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
