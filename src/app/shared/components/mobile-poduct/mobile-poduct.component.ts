import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/interface';
import { mobileProducts } from '../../const/mobileproduct';

@Component({
  selector: 'app-mobile-poduct',
  templateUrl: './mobile-poduct.component.html',
  styleUrls: ['./mobile-poduct.component.scss']
})
export class MobilePoductComponent implements OnInit {
   public mobileProduct:Array<Imobile>=[]
   public isav:boolean=true;
  constructor() { }
  
  ngOnInit(): void {
    this.mobileProduct=mobileProducts;
  }

}
