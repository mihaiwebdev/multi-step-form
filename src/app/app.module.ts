import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StepOneFormComponent } from './components/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './components/step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './components/step-three-form/step-three-form.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, StepOneFormComponent, StepTwoFormComponent, StepThreeFormComponent, SummaryComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
