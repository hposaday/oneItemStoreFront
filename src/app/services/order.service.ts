import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from './../constants/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  serverUrl = SERVER_URL.dev;
  
  constructor(
      private httpClient: HttpClient
      ) { }


  getAllOrders () : Observable<any> {
     return this.httpClient.get(this.serverUrl+'/order');
  }

  createOrder (payload) : Observable<any> {
    return this.httpClient.post(this.serverUrl+'/order', payload)
  }

  getOrderStatus (payload) : Observable<any> {
    return this.httpClient.post(this.serverUrl+'/order/'+payload, {})
  }

  updateOrderStatus (payload) : Observable<any> {
    return this.httpClient.put(this.serverUrl+'/order/'+payload.orderId, {"status": payload.status})
  }
}
