import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  public url='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'contentType': 'aplication/json',
      'X-CMC_PRO_API_KEY': 'c8bd1450-17c3-4614-8888-5f1d4ab6dd89'
    })
  }

  public getdata(){
    return this.http.get(this.url, {headers : this.httpOptions.headers});
  }
  
}
