import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms'
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AppComponent implements OnInit {
  // title = 'wrench-demo';
  public customerData: FormGroup;
  public vehicleData: FormGroup;
  months:any= ["01","02","03","04","05","06","07","08","09","10","11","12"];
  years:any=["20","21","22","23","24","25","26","27","28","29","30"]
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private fb: FormBuilder){
    this.customerData = this.fb.group({
      fName: [''],
      lName: [''],
      address: this.fb.group({
      street: '',
      area: '',
      city: '',
      state: '',
      zip: ''
    }),
    cards: 
      this.fb.group({
        card_fName: '',
        card_lName: '',
        card_number: '',
        card_mm: '',
        card_yyyy: '',
        card_cvv: ''
      })
  
    });
    this.vehicleData = this.fb.group({
      vehicles: this.fb.array([
        this.fb.group({
          model: '',
          make: '',
          year: '',
          kms: ''
        })
      ])
    });
  } //end of constructor
  get userCars() {
    return this.vehicleData.get("vehicles") as FormArray;
  }
  get userDetails(){
    return this.customerData.value;
  }
  get userCreditCards() {
    return this.customerData.get("cards").value;
  }
  addNewVehicle(){
    let control = <FormArray> this.vehicleData.controls.vehicles;
    control.push(
      this.fb.group({
          model: [''],
          make: [''],
          year: [''],
          kms: ['']
      })
    )
  }
  deleteVehicle(index){
    let control = <FormArray> this.vehicleData.controls.vehicles;
    control.removeAt(index);
  }
  // addNewCard(){
  //   let control = <FormArray> this.customerData.controls.cards;
  //   control.push(
  //     this.fb.group({
  //       card_fName: '',
  //       card_lName: '',
  //       card_number: '',
  //       card_mm: '',
  //       card_yyyy: '',
  //       card_cvv: ''
  //     })
  //   )
  // }
  // deleteCard(index){
  //   let control = <FormArray> this.customerData.controls.cards;
  //   control.removeAt(index);
  // }

  transform(cardNumber) {
    return cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
}
  ngOnInit(){
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  }

