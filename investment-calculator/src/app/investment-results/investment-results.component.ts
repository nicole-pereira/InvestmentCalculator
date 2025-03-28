import { Component, Input } from '@angular/core';
import { InvestmentOutput } from '../investment-input.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentOutput[];

}
