import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

export interface PeriodicElement {
  position: number;
  name: string;
  price: number;
  change24: number;
  change7: number;
  cap: number;
  volume: number;
  supply: number;
}

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit {

  public newdata: any = [];
  public logos: any;
  displayedColumns: string[] = ['position', 'name', 'price', 'change24', 'change7', 'cap', 'volume', 'supply'];

  constructor(private service: TrackerService) { }

  async ngOnInit() {
    await this.service.getdata().subscribe(res => {
      this.newdata = res;
      console.log(this.newdata);
    });
  }
}


