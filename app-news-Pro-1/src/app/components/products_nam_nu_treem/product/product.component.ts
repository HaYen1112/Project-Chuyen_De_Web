import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/model/product';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.css',
    './css/theme-animate.css',
    './css/bootstrap.min.css',
  ],
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subGetProducts: Subscription = new Subscription();
  subGetParam: Subscription = new Subscription();
  constructor(
    private cartService: CartService,
    private productSerivice: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subGetParam.unsubscribe();
    this.subGetProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.getProductsByType();
  }

  onClickAddProductToCart(productId: number) {
    this.cartService.addProductToCart(productId);
  }

  getProductsByType() {
    this.subGetParam = this.activatedRoute.params.subscribe((param) => {
      this.subGetProducts = this.productSerivice
        .getAllProductByType(param['productType'])
        .subscribe((response) => {
          this.products = response.data;
        });
    });
  }
}
