import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

Injectable({
  providedIn: 'root'
})

// export interface PeriodicElement {
//   position: number;
//   name: string;
//   price: number;
//   change24: number;
//   change7: number;
//   cap: number;
//   volume: number;
//   supply: number;
// }

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit {

  public url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h%2C%207d&locale=de';
  public coins: any = [];
  public chartsData: any = [];
  public coinUrl: any = [];

  constructor(private http: HttpClient) { }

  public getdata() {
    return this.http.get(this.url);
  }

  async ngOnInit() {
    await this.getdata().subscribe(res => {
      this.coins = res;
      console.log(this.coins);
      setTimeout(() => {
        this.createChart();
      }, 3000);
    });
  }

  async createChart() {
    await this.coins.forEach((coin) => {
      let i = this.coins.indexOf(coin);
      // console.log(coin);
      this.addChart(coin, i);
    })
  }

  async addChart(coin, i) {
    let bordercolor = 'green';
    let xAxis = [];
    let yAxis = [];
    for (let j = 0; j < coin.sparkline_in_7d.price.length; j++) {
      let price = coin.sparkline_in_7d.price[j];
      xAxis.push(j)
      yAxis.push(price);

    }
    if (yAxis.at(-1) < yAxis.at(0)) {
      bordercolor = 'red';
    }

    new Chart(("myChart" + i), {
      // new Chart(("myChart"), {
      type: 'line',
      data: {
        labels: xAxis,
        datasets: [{
          label: '',
          data: yAxis,
          fill: false,
          borderColor: bordercolor,
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          },
        },
        plugins: {
          legend: {
            display: false // This hides all text in the legend and also the labels.
          },
        }
      }
    });
  }
}