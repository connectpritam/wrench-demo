import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-vis',
  templateUrl: './credit-card-vis.component.html',
  styleUrls: ['./credit-card-vis.component.scss']
})
export class CreditCardVisComponent implements OnInit {
  // @Input() cardNumber: string;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cardNumber)
  }

}
