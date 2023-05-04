import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8081/Cart/';
  adminhttpOptions:any;
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+ "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjY3Nzg1NywiZXhwIjoxNjgyNzY0MjU3fQ.QMcQhVSxT-wRgscZsBdqN4Vo0UVFNrZJC5Aw6-0JTyQNXQLtLDtRpkszV-URVGTmh5-_ftH2PMan5MyHNDlavQ"})
     
      };
  }

  createCart():Observable<Cart>{
    return this.httpClient.post<Cart>('http://localhost:8081/Cart/', {});
  }
}
