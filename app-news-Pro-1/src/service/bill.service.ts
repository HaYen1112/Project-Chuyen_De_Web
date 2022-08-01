import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryCost } from 'src/model/delivery_cost';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient: HttpClient) { }

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

  getAllBills(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')!,
    });
    const requestOptions = { headers: headers };
    return this.httpClient.get(
      environment.REST_API + '/bill/get-all-bills',
      requestOptions
    );
  }
}
