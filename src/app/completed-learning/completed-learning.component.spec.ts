import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLearningComponent } from './completed-learning.component';

describe('CompletedLearningComponent', () => {
  let component: CompletedLearningComponent;
  let fixture: ComponentFixture<CompletedLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
