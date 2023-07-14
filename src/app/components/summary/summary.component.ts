import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

import { AddOn } from '../step-three-form/addOn';
import { PlanData } from '../step-two-form/planData';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  plan!: PlanData;
  addOns!: AddOn[];
  total!: number;
  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.plan = this.formService.getData('plan');
    this.addOns = this.formService.getData('addOns');

    if (this.plan.billing === 'yearly') {
      this.total =
        this.plan.plan.yearly +
        this.addOns.reduce((prev, curr) => prev + curr.yearlyPrice, 0);
    } else if (this.plan.billing === 'monthly') {
      this.total =
        this.plan.plan.monthly +
        this.addOns.reduce((prev, curr) => prev + curr.price, 0);
    }
  }
}
