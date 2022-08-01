import { Injectable } from '@angular/core';
import { ItemCart } from 'src/model/item_cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
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

  
}
