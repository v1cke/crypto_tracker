import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit {

  public newdata: any;
  public dataAsJson: {};
  // id: number;
  // name: string;
  // symbol: any;
  // slug: string;
  // price: string;

  constructor(private service: TrackerService) { }

  ngOnInit() {
    this.service.getdata().subscribe(res => { this.newdata = res });
    this.dataAsJson = this.newdata.toJson();
    console.log(this.newdata);
  }

  // public toJson() {
  //   return {
  //     id: this.id,
  //     name: this.name,
  //     symbol: this.symbol,
  //     slug: this.slug,
  //     price: this.price,
  //   };
  // }

}


