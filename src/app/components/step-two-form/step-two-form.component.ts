import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';
import { Plan } from './plan';
import { PlanData } from './planData';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit {
  arcade: Plan = {
    plan: 'arcade',
    monthly: 9,
    yearly: 90,
  };
  advanced: Plan = {
    plan: 'advanced',
    monthly: 12,
    yearly: 120,
  };
  pro: Plan = {
    plan: 'pro',
    monthly: 15,
    yearly: 150,
  };
  selectedPlan: Plan = this.arcade;
  billing: string = 'monthly';

  constructor(private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    const dataFromLs: PlanData = this.formService.getData('plan');

    if (dataFromLs) {
      this.selectedPlan = dataFromLs.plan;
      this.billing = dataFromLs.billing;
    }
  }

  selectPlan(plan: Plan) {
    this.selectedPlan = plan;
  }

  toggleBilling() {
    this.billing = this.billing === 'monthly' ? 'yearly' : 'monthly';
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const planData: PlanData = {
      plan: this.selectedPlan,
      billing: this.billing,
    };

    this.formService.setData('plan', planData);
    this.router.navigate(['/adds-on']);
  }
}
