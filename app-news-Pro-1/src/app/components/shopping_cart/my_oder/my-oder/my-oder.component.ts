import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillService } from 'src/service/bill.service';

@Component({
  selector: 'app-my-oder',
  templateUrl: './my-oder.component.html',
  styleUrls: ['./my-oder.component.scss'],
})
export class MyOderComponent implements OnInit, OnDestroy {
  subGetAllBills: Subscription = new Subscription();
  constructor(private billService: BillService) {}
  ngOnDestroy(): void {
    this.subGetAllBills.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllBills();
  }

  getAllBills() {
    this.subGetAllBills = this.billService.getAllBills().subscribe((response) => {
      console.log(response);
    })
  }
}
