import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorqueAppComponent } from './torque-app.component';

describe('TorqueAppComponent', () => {
  let component: TorqueAppComponent;
  let fixture: ComponentFixture<TorqueAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorqueAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorqueAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
