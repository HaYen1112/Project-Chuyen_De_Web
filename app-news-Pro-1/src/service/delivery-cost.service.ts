import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryCostService {

  constructor(private httpClient: HttpClient) { }

  getDeliveryCost():Observable<any> {
    return this.httpClient.get(environment.REST_API + "/delivery-cost/get-delivery-cost");
  }
}
