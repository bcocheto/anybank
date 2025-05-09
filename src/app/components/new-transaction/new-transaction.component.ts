import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-transaction',
  imports: [FormsModule],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css',
})
export class NewTransactionComponent {
  newTransaction = '';
  transactionType = '';

  onSubmit() {}
}
