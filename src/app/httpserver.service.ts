import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { product } from './components/model/item';
@Injectable({
  providedIn: 'root',
})
export class HttpserverService {
  productlist: product[] = [];
  itemdetal: product = { id: 0, name: '', price: 0, url: '', description: '' };
  cardlist: product[] = [];
  one: boolean = true;
  two: boolean = true;
  three: boolean = true;
  four: boolean = true;
  five: boolean = true;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  count5: number = 0;
  count: number = 1;
  name:string=""
  productlist$ = new BehaviorSubject<product[]>(this.productlist);
  cardlist$ = new BehaviorSubject<product[]>(this.cardlist);
  constructor(private http: HttpClient) {}
  getdata() {
    const subscription = this.http
      .get<[product]>('./assets/data.json')
      .subscribe((item) => {
        this.productlist = item;
        this.productlist$.next(this.productlist);

        subscription.unsubscribe();
      });
  }
  getproductdetail(product: product) {
    this.itemdetal = product;
  }
  addtocard(product: product, num: number) {
    if (
      (this.one && product.id == 1) ||
      (this.two && product.id == 2) ||
      (this.three && product.id == 3) ||
      (this.four && product.id == 4) ||
      (this.five && product.id == 5)
    ) {
      if (product.id == 1) {
        this.one = false;
        this.count1 = num * product.id;
      } else if (product.id == 2) {
        this.two = false;
        this.count2 = num;
      } else if (product.id == 3) {
        this.three = false;
        this.count3 = num;
      } else if (product.id == 4) {
        this.four = false;
        this.count4 = num;
      } else if (product.id == 5) {
        this.five = false;
        this.count5 = num;
      }
      this.cardlist.push(product);
      alert('added successfully');
    }
  }
  removecart(id: number) {
    const index = this.cardlist.findIndex(t => t.id === id);
    if (id == 1) {
      this.one = true;
    } else if (id == 2) {
      this.two = true;
    } else if (id == 3) {
      this.three = true;
    } else if (id == 4) {
      this.four = true;
    } else if (id == 5) {
      this.five = true;
    }
    this.cardlist.splice(index, 1);
    this.cardlist$.next(this.cardlist);
  }
  removall(){
    this.cardlist=[]
    this.cardlist$.next(this.cardlist);
    this.one= true;
    this.two= true;
    this.three= true;
    this.four= true;
    this.five= true;
    count1: 0;
    count2:0;
    count3:0;
    count4:0;
    count5:0;
    this.name=""
  }
}
