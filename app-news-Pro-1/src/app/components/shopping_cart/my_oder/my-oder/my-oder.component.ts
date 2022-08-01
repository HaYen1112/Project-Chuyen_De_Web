import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bill } from 'src/model/bill';
import { ProductBill } from 'src/model/product_bill';
import { BillService } from 'src/service/bill.service';

@Component({
  selector: 'app-my-oder',
  templateUrl: './my-oder.component.html',
  styleUrls: ['./my-oder.component.scss'],
})
export class MyOderComponent implements OnInit, OnDestroy {
  subGetAllBills: Subscription = new Subscription();
  bills: Bill[] = [];

  constructor(private billService: BillService) {}
  ngOnDestroy(): void {
    this.subGetAllBills.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllBills();
  }

  getAllBills() {
    this.subGetAllBills = this.billService.getAllBills().subscribe((response) => {
      this.bills = response;
    })
  }

  totalPriceBill(productBills: ProductBill[], deliveryCost: number):number {
    let result = 0;
    productBills.forEach(element => {
        result += (element.price * element.quantity);
    });
    return result + deliveryCost;
  }
}
