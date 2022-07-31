import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css'],
})
export class Cart1Component implements OnInit, OnDestroy {
  products: Product[] = [];
  subGetProduct: Subscription = new Subscription();
  constructor(private productService: ProductService) {}

  ngOnDestroy(): void {
    this.subGetProduct.unsubscribe();
  }
  ngOnInit(): void {
    this.loadDataCart();
  }

  loadDataCart(): void {
    let cart = JSON.parse(localStorage.getItem('cart')!);
    for (let item of cart) {
      this.subGetProduct = this.productService
        .getProductById(item.productId)
        .subscribe((response) => {
          if (response.data != null) {
            let product = new Product(
              response.data.id,
              response.data.code,
              response.data.productName,
              response.data.price * item.quantity,
              response.data.img,
              item.quantity
            );
            this.products.push(product);
          }
        });
    }
  }

  onClickMinus(productId: number): void {
    this.products.forEach((element) => {
      if (element.id == productId) {
        if (element.quantity > 1) {
          element.quantity;
          element.quantity -= 1;
          element.price =
            element.quantity * (element.price / (element.quantity + 1));
        }
      }
    });
  }

  onClickPlus(productId: number): void {
    this.products.forEach((element) => {
      if (element.id == productId) {
        element.quantity += 1;
        element.price =
          element.quantity * (element.price / (element.quantity - 1));
      }
    });
  }

  onChangeQuantity(productId: number, quantity: string): void {
    this.products.forEach((element) => {
      if (element.id == productId) {
        if (Number(quantity) > 0) {
          let originPrice = element.price / element.quantity;
          element.quantity = Number(quantity);
          element.price = element.quantity * originPrice;
        }
      }
    });
  }

  onClickDeleteProduct(productId: number): void {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id == productId) {
        this.products.splice(index, 1);
        document.getElementById('item-' + productId)!.remove();
      }
    }
  }

  totalPrice(): number {
    let result = 0;
    this.products.forEach((element) => {
      result += element.price;
    });
    return result;
  }
}
