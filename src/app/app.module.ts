import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { MaterialModule } from './material.module';
import { HttpClientModule  } from '@angular/common/http';

import { OrderService } from './services/order.service';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OrderListComponent } from './components/order-list/order-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateOrderComponent,
    ToolbarComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
