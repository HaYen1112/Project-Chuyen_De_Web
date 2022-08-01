import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/service/product.service';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss','../asset2/css/bootstrap.min.css','../asset2/css/fontawesome.min.css','../asset2/css/templatemo-style.css']
})
export class AdminProductComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subGetProducts: Subscription = new Subscription();
  subGetParam: Subscription = new Subscription();
  constructor(
    private productSerivice: ProductService,
  ) {
  }

  ngOnDestroy(): void {
    this.subGetParam.unsubscribe();
    this.subGetProducts.unsubscribe();
  }

  ngOnInit(): void {
   this.getProducts();
  }

  deleteProduct(id : number){
        this.productSerivice.getProductById(id)
        .subscribe((response) => {
          this.products = response;
          console.log(response)});
  }
  getProducts() {
      this.subGetProducts = this.productSerivice
        .getAllProduct()
        .subscribe((response) => {
          this.products = response;
          console.log(response)
        });
  }

}
