import { Component, OnInit } from '@angular/core';
import { product } from '../model/item';
import { HttpserverService } from 'src/app/httpserver.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private httpservice: HttpserverService) {
    this.httpservice.getdata();
    this.httpservice.productlist$.subscribe(item=>{
      this.products=item
    })
  }
  count:number=1
  products: product[] = [];
  product2:product={
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  ngOnInit(): void {
    this.httpservice.count = this.count;
  }
}
