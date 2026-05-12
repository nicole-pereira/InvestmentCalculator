import { Injectable, signal } from '@angular/core';
import { InvestmentInput, InvestmentOutput } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData = signal<InvestmentOutput[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    let investmentValue = initialInvestment;
    const annualData = [];

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return this.resultData.set(annualData);
  }
}
