import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEvento2Component } from './editar-evento2.component';

describe('EditarEvento2Component', () => {
  let component: EditarEvento2Component;
  let fixture: ComponentFixture<EditarEvento2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEvento2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEvento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
