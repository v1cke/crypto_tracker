import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit {

  public newdata: any;
  public logos: any;

  constructor(private service: TrackerService) { }

  async ngOnInit() {
    await this.service.getdata().subscribe(res => {
      this.newdata = res;
      console.log(this.newdata);
    });
  }
}


