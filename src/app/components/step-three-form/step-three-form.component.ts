import { Component, WritableSignal, signal, OnInit } from '@angular/core';
import { AddOn } from './addOn';
import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.css'],
})
export class StepThreeFormComponent implements OnInit {
  addOns: WritableSignal<AddOn[]> = signal<AddOn[]>([
    {
      name: 'Online service',
      text: 'Access to multiplayer games',
      price: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      name: 'Larger storage',
      text: 'Extra 1TB of cloud save',
      price: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      name: 'Customizable profile',
      text: 'Custom theme on your profile',
      price: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ]);

  constructor(private formService: FormService, private router: Router) {}
  billing!: string;

  ngOnInit(): void {
    this.billing = this.formService.getData('plan').billing;

    const addOnsFromLs = this.formService.getData('addOns');

    if (addOnsFromLs) {
      this.addOns.mutate((addOns) => {
        addOns.map((addOn) => {
          addOnsFromLs.map((val: AddOn) => {
            if (val.name === addOn.name) {
              addOn.selected = true;
            }
          });
        });
      });
    }
  }

  selectAddOn(index: number): void {
    this.addOns.mutate(
      (addOn) => (addOn[index].selected = !addOn[index].selected)
    );
  }

  handleSubmit($e: SubmitEvent) {
    $e.preventDefault();

    const selectedAddOn = this.addOns().filter((addOn) => addOn.selected);
    this.formService.setData('addOns', selectedAddOn);
    this.router.navigate(['/summary']);
  }
}
