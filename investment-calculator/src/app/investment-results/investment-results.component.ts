import { Component, computed, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  public investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
