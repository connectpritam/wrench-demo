import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-vis',
  templateUrl: './credit-card-vis.component.html',
  styleUrls: ['./credit-card-vis.component.scss']
})
export class CreditCardVisComponent implements OnInit {
  @Input() cardDetails:any;
  // @Input() cardNumber;
  // @Input() fName;


  constructor() { }

  ngOnInit(): void {
    // console.log(this.cardNumber)
  }

}
