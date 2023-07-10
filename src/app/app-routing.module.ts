import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepOneFormComponent } from './components/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './components/step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './components/step-three-form/step-three-form.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: 'personal-info', component: StepOneFormComponent },
  { path: 'select-plan', component: StepTwoFormComponent },
  { path: 'adds-on', component: StepThreeFormComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
