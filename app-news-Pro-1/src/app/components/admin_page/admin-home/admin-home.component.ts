import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss','../asset2/css/bootstrap.min.css','../asset2/css/fontawesome.min.css','../asset2/css/templatemo-style.css']
})
@Injectable({
  providedIn: 'root',
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subGetProducts: Subscription = new Subscription();
  subGetParam: Subscription = new Subscription();
  constructor(
    private productSerivice: ProductService,
  ) {}

  ngOnDestroy(): void {
    this.subGetParam.unsubscribe();
    this.subGetProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.getProductBills();
  }

  getProductBills() {
      this.productSerivice
        .getAllProductBill()
        .subscribe((response) => {
          this.products = response;
          console.log(response)
        });
  }

}
