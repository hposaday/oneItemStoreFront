import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private orders = []
  
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe( allOrders => {
      console.log(allOrders.data, "response orders")
      this.orders = allOrders.data
    })
  }

}
