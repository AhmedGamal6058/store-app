import { Component, OnInit } from '@angular/core';
import { HttpserverService } from 'src/app/httpserver.service';
import { product } from './../model/item';
import { CardServicesService } from './../../card-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  name: string = '';
  address: string = '';
  credit: string = '';
  totalcard: number = 0;
  ascii: number = 0;
  total: number = 0;
  count1: number = this.service.count1;
  count2: number = this.service.count2;
  count3: number = this.service.count3;
  count4: number = this.service.count4;
  count5: number = this.service.count5;
  price1: number = this.service.productlist[0].price;
  price2: number = this.service.productlist[1].price;
  price3: number = this.service.productlist[2].price;
  price4: number = this.service.productlist[3].price;
  price5: number = this.service.productlist[4].price;
  lists: product[] = [];
  constructor(private service: HttpserverService,private CardServices:CardServicesService) {
    this.service.getdata();
    this.service.cardlist$.subscribe((item) => {
      this.lists = item;
    });
  }
  ngOnInit(): void {
    this.total =
      this.count1 * this.price1 +
      this.count2 * this.price2 +
      this.count3 * this.price3 +
      this.count4 * this.price4 +
      this.count5 * this.price5;
    this.CardServices.totalprice = this.total;
    console.log(this.total);
  }
  onSubmit() {
    this.service.name = this.name;
  }
  on(name: string) {
    this.service.name = name;
    this.total =
      this.count1 * this.price1 +
      this.count2 * this.price2 +
      this.count3 * this.price3 +
      this.count4 * this.price4 +
      this.count5 * this.price5;
    this.CardServices.totalprice = this.total;
    console.log(this.total);
    alert('submited');
  }
  delete(count: number, id: number) {
    if (count == 0) {
      this.service.removecart(id);
      alert('deleted');
    }
  }
  checknumber(num: string) {
    if(num[num.length-1].charCodeAt(0) < 48 || num[num.length-1].charCodeAt(0) > 58){
      this.credit=" "
      alert("number only")
    }
  }
}
