import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneFormComponent } from './step-one-form.component';

describe('StepOneFormComponent', () => {
  let component: StepOneFormComponent;
  let fixture: ComponentFixture<StepOneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepOneFormComponent]
    });
    fixture = TestBed.createComponent(StepOneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
