import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './../../model/item';
import { HttpserverService } from 'src/app/httpserver.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  count:number=1
  @Input() product: product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  @Output() count2 = new EventEmitter<number>();
  constructor(private service: HttpserverService) {}
  ngOnInit(): void {
    this.service.count=this.count;

  }
  getid(e: product) {
    this.service.getproductdetail(e);
  }
  updatecount(e:number) {
    this.count=e
  }
  addtolist(product: product,count:number) {
    this.service.addtocard(product,count);
  }
}
