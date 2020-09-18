import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEvento2Component } from './crear-evento2.component';

describe('CrearEvento2Component', () => {
  let component: CrearEvento2Component;
  let fixture: ComponentFixture<CrearEvento2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEvento2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEvento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
