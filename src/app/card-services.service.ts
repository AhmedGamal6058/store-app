import { Injectable } from '@angular/core';
import { product } from './components/model/item';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServicesService {
  totalprice:number=0
}
