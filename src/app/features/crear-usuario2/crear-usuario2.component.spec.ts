import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuario2Component } from './crear-usuario2.component';

describe('CrearUsuario2Component', () => {
  let component: CrearUsuario2Component;
  let fixture: ComponentFixture<CrearUsuario2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuario2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
