import { Component, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { Transaction } from './models/transaction';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transactions = signal<Transaction[]>([]);
  processTransaction(transaction: Transaction) {
    this.transactions.update((list) => [transaction, ...list]);
  }
}
