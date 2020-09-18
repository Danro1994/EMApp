import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInvitadoComponent } from './editar-invitado.component';

describe('EditarInvitadoComponent', () => {
  let component: EditarInvitadoComponent;
  let fixture: ComponentFixture<EditarInvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
