import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    const dataFromLS = this.formService.getData('personal-info');

    this.personalInfoForm = this.formBuilder.group({
      name: [dataFromLS ? dataFromLS.name : '', Validators.required],
      email: [
        dataFromLS ? dataFromLS.email : '',
        [Validators.email, Validators.required],
      ],
      phone: [
        dataFromLS ? dataFromLS.phone : '',
        [
          Validators.required,
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          ),
        ],
      ],
    });
  }

  get formControl() {
    return this.personalInfoForm.controls;
  }

  handleSubmit() {
    if (this.personalInfoForm.valid) {
      this.formService.setData('personal-info', this.personalInfoForm.value);

      this.router.navigate(['/select-plan']);
    } else {
      console.log('not valid');
    }
  }
}
