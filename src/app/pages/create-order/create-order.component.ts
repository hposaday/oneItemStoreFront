import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router"

import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  private createOrderForm: FormGroup

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createOrderForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
   });
  }

  createOrder () {
    console.log(this.createOrderForm.get('name').value)
    const customerData = {
      customer_name: this.createOrderForm.get('name').value,
      customer_email: this.createOrderForm.get('email').value,
      customer_mobile: this.createOrderForm.get('phone').value
    }
    console.log(customerData)
    this.orderService.createOrder(customerData).toPromise().then( createdOrder => {
      console.log(createdOrder)
      localStorage.setItem('currentOrder',createdOrder.proccesPaymentData.requestId)
      localStorage.setItem('processUrl',createdOrder.proccesPaymentData.processUrl)
      localStorage.setItem('orderData', JSON.stringify(createdOrder.orderData))
      this.router.navigate(['/order-detail'])
    })
  }

}
