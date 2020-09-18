import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInvitadoComponent } from './crear-invitado.component';

describe('CrearInvitadoComponent', () => {
  let component: CrearInvitadoComponent;
  let fixture: ComponentFixture<CrearInvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearInvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
