import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRequestsComponent } from './learning-requests.component';

describe('LearningRequestsComponent', () => {
  let component: LearningRequestsComponent;
  let fixture: ComponentFixture<LearningRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
