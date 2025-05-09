import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'anybank';
}
