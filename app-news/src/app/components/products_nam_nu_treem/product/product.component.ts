import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.css',
    './css/theme-animate.css',
    './css/bootstrap.min.css',
  ],
})
export class ProductComponent implements OnInit {
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  onClickAddProductToCart(idProduct: string) {
    this.cartService.addProductToCart(idProduct);
  }
}
