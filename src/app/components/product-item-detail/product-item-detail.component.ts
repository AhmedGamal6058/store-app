import { Component, OnInit } from '@angular/core';
import { HttpserverService } from 'src/app/httpserver.service';
import { product } from './../model/item';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  count:number=1
  constructor(private http: HttpserverService) {}
  products: product = { id: 0, name: '', price: 0, url: '', description: '' };
  ngOnInit(): void {
    this.products=this.http.itemdetal;
    this.count=this.http.count;
  }
  addtolist(product: product,count:number) {
    this.http.addtocard(product,count);
  }
}
