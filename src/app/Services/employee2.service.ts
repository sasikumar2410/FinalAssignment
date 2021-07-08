import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Employee2Service {
  url:string = 'assets/MyJson/employee2.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallemp2(){
     return this.httpClient.get(this.url)
}
}
