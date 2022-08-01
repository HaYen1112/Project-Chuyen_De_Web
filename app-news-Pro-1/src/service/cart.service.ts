import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryCost } from 'src/model/delivery_cost';
import { ItemCart } from 'src/model/item_cart';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  addProductToCart(productId: number) {
    if (localStorage.getItem('cart') == null) {
      let cartTemp = [];
      cartTemp.push(new ItemCart(productId, 1));
      localStorage.setItem('cart', JSON.stringify(cartTemp));
    } else {
      let cart = JSON.parse(localStorage.getItem('cart')!);
      let checkInCart = false;
      if (cart.length > 0) {
        cart.forEach(function (item: any) {
          if (item.productId == productId) {
            item.quantity = parseInt(item.quantity) + 1;
            checkInCart = true;
          }
        });
      }
      if (cart.length == 0 || !checkInCart) {
        cart.push(new ItemCart(productId, 1));
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    alert('Add product to cart is succeed!');
  }

  minusProductInCart(productId: number): boolean {
    try {
      let cart = JSON.parse(localStorage.getItem('cart')!);
      cart.forEach(function (item: any) {
        if (item.productId == productId) {
          item.quantity = parseInt(item.quantity) - 1;
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      return true;
    } catch (error) {
      return false;
    }
  }

  plusProductInCart(productId: number): boolean {
    try {
      let cart = JSON.parse(localStorage.getItem('cart')!);
      cart.forEach(function (item: any) {
        if (item.productId == productId) {
          item.quantity = parseInt(item.quantity) + 1;
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      return true;
    } catch (error) {
      return false;
    }
  }

  changeQuantityProductInCart(productId: number, quantity: number): boolean {
    try {
      let cart = JSON.parse(localStorage.getItem('cart')!);
      cart.forEach(function (item: any) {
        if (item.productId == productId) {
          item.quantity = quantity;
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      return true;
    } catch (error) {
      return false;
    }
  }

  deleteProductInCart(productId: number): boolean {
    try {
      let cart = JSON.parse(localStorage.getItem('cart')!);
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].productId == productId) {
          cart.splice(index, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      return true;
    } catch (error) {
      return false;
    }
  }

  clearCart() {
    let cart: any = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  paymentBill(
    products: Product[],
    address: string,
    deliveryCost: DeliveryCost
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')!,
    });
    const requestOptions = { headers: headers };
    
    const mapProducts = new Map<number, number>();
    products.forEach(function (item: any) {
      mapProducts.set(item.id, item.quantity);
    });
    const jsonProducts = Object.fromEntries(mapProducts);

    let mapData = {
      products: jsonProducts,
      address: address,
      deliveryCostId: deliveryCost.id,
    };
    return this.httpClient.post(
      environment.REST_API + '/bill/payment',
      mapData,
      requestOptions
    );
  }
}
