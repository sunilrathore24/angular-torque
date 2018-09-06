import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorqueExpComponent } from './torque-exp.component';

describe('TorqueExpComponent', () => {
  let component: TorqueExpComponent;
  let fixture: ComponentFixture<TorqueExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorqueExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorqueExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
