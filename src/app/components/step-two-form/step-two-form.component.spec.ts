import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoFormComponent } from './step-two-form.component';

describe('StepTwoFormComponent', () => {
  let component: StepTwoFormComponent;
  let fixture: ComponentFixture<StepTwoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepTwoFormComponent]
    });
    fixture = TestBed.createComponent(StepTwoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
