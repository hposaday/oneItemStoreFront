import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  private order_code;
  private name;
  private phone;
  private mail;
  private status;

  private valuesLoaded = false;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const requestId = localStorage.getItem('currentOrder')
    const orderData = JSON.parse(localStorage.getItem('orderData'))
    
    this.orderService.getOrderStatus(requestId).toPromise().then( orderStatus => {
        if (orderStatus) {
          this.status = orderStatus.orderStatusData
        } else {
          this.status = orderData.STATUS
        }
        this.valuesLoaded = true
        this.orderService.updateOrderStatus({'orderId': orderData.id, 'status': this.status}).toPromise().then( resp => console.log(resp))
    })
  

    this.order_code = orderData.ORDER_CODE
    this.name = orderData.CUSTOMER_NAME
    this.phone = orderData.CUSTOMER_MOBILE
    this.mail = orderData.CUSTOMER_EMAIL
  }

  payOrder () {
    window.location.href = localStorage.getItem('processUrl')
  }

}
