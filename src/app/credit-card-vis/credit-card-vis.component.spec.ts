import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardVisComponent } from './credit-card-vis.component';

describe('CreditCardVisComponent', () => {
  let component: CreditCardVisComponent;
  let fixture: ComponentFixture<CreditCardVisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardVisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
