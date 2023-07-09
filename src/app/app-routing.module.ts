import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepOneFormComponent } from './components/navbar/step-one-form/step-one-form.component';

const routes: Routes = [{ path: '', component: StepOneFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
