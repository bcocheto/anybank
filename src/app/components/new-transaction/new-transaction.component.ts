import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../../models/transaction';

@Component({
  selector: 'app-new-transaction',
  imports: [FormsModule],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css',
})
export class NewTransactionComponent {
  transactionValue = '';
  transactionType = '';

  newTransaction = output<Transaction>();

  onSubmit() {
    const transaction = new Transaction(
      this.transactionType as TransactionType,
      Number(this.transactionValue)
    );
    this.newTransaction.emit(transaction);
  }
}
