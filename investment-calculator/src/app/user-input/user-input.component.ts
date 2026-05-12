import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  public investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
    });
  }
}
