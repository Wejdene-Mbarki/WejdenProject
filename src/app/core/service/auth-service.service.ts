import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 

  constructor(private http: HttpClient) { }

  register(firstName : string ,lastName :string ,username: string, email: string, password: string , birthDate:Date ,roles: string[] ): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        firstName
        ,lastName 
        , username 
        , email 
        ,password 
        ,birthDate 
        ,roles
      },
      httpOptions
    );
  }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  
  }


