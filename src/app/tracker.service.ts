import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private http:HttpClient) { }

  public getdata(){
  }
  
}
