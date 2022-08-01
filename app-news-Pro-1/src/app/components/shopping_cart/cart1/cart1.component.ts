import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeliveryCost } from 'src/model/delivery_cost';
import { Product } from 'src/model/product';
import { CartService } from 'src/service/cart.service';
import { DeliveryCostService } from 'src/service/delivery-cost.service';
import { LoginService } from 'src/service/login.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css'],
})
export class Cart1Component implements OnInit, OnDestroy {
  products: Product[] = [];
  deliveryCost: DeliveryCost = new DeliveryCost();
  subGetProduct: Subscription = new Subscription();
  subGetDeliveryCost: Subscription = new Subscription();
  address: string = '';
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private deliveryCostService: DeliveryCostService,
    private loginService: LoginService
  ) {}

  ngOnDestroy(): void {
    this.subGetProduct.unsubscribe();
    this.subGetDeliveryCost.unsubscribe();
  }
  ngOnInit(): void {
    this.loadDataCart();
    this.loadDataDeliveryCost();
    this.loadAddress();
  }

  loadDataCart(): void {
    let cart = JSON.parse(localStorage.getItem('cart')!);
    for (let item of cart) {
      this.subGetProduct = this.productService
        .getProductById(item.productId)
        .subscribe((response) => {
          if (response != null) {
            let product = new Product(
              response.id,
              response.code,
              response.productName,
              response.price * item.quantity,
              response.img,
              item.quantity
            );
            this.products.push(product);
          }
        });
    }
  }

  loadDataDeliveryCost() {
    this.subGetDeliveryCost = this.deliveryCostService
      .getDeliveryCost()
      .subscribe((response) => {
        if (response != null) {
          this.deliveryCost = response;
        }
      });
  }

  loadAddress() {
    let localAddress = localStorage.getItem('address');
    if (localAddress != null) {
      this.address = localAddress;
    }
  }

  onClickMinus(productId: number): void {
    this.products.forEach((element) => {
      if (
        element.id == productId &&
        element.quantity > 1 &&
        this.cartService.minusProductInCart(productId)
      ) {
        element.quantity;
        element.quantity -= 1;
        element.price =
          element.quantity * (element.price / (element.quantity + 1));
      }
    });
  }

  onClickPlus(productId: number): void {
    this.products.forEach((element) => {
      if (
        element.id == productId &&
        this.cartService.plusProductInCart(productId)
      ) {
        element.quantity += 1;
        element.price =
          element.quantity * (element.price / (element.quantity - 1));
      }
    });
  }

  onChangeQuantity(productId: number, quantity: string): void {
    this.products.forEach((element) => {
      if (element.id == productId) {
        if (
          Number(quantity) > 0 &&
          this.cartService.changeQuantityProductInCart(
            productId,
            Number(quantity)
          )
        ) {
          let originPrice = element.price / element.quantity;
          element.quantity = Number(quantity);
          element.price = element.quantity * originPrice;
        }
      }
    });
  }

  onClickDeleteProduct(productId: number): void {
    for (let index = 0; index < this.products.length; index++) {
      if (
        this.products[index].id == productId &&
        this.cartService.deleteProductInCart(productId)
      ) {
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

  onClickPayment() {
    if (this.address == '') {
      document.getElementById('notify-address')!.style.display = 'block';
    } else if (!this.loginService.isLogged()) {
      localStorage.setItem('address', this.address);
      document.getElementById('open-modal-notify')!.click();
    } else {
      localStorage.setItem('address', this.address);
      document.getElementById('notify-address')!.style.display = 'none';
      this.cartService
        .paymentBill(this.products, this.address, this.deliveryCost)
        .subscribe((response) => {
          if (response.data) {
            localStorage.setItem('address', '');
            this.address = '';
            this.products = [];
            this.cartService.clearCart();
          }
          alert(response.message);
        });
    }
  }
}
