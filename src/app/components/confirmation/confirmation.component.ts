import { Component, OnInit } from '@angular/core';
import { HttpserverService } from 'src/app/httpserver.service';
import { CardServicesService } from './../../card-services.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  total:number=0
  name:string=""
  constructor(private service:HttpserverService,private CardServices:CardServicesService) {
    this.total=this.CardServices.totalprice
    this.name=this.service.name
   }
  ngOnInit(): void {
  }
}
