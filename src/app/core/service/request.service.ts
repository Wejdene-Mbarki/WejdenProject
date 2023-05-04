import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loan } from '../model/loan';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4Mjc4ODcyOCwiZXhwIjoxNjgyODc1MTI4fQ.gVv9Sn8IAYlzbqYwRmBNjXpQyY6Di5HQlpE2vqZFn1JUH7bGTa_K-nUSpgbETGzx9uYFerB1NMU1571Q-OEmIg"})
     
      };
  }
  public addRequest(request:any){
    return this.httpClient.post("http://localhost:8081/RequestLoan/add/1",request,{responseType:'text'as'json'})
  }
  public getAllRequests(){
    return this.httpClient.get("http://localhost:8081/RequestLoan/all",this.adminhttpOptions)
  }
  public getAllLoans(){
    return this.httpClient.get("http://localhost:8081/Loan/all",this.adminhttpOptions)
  }

  public deletLoanById(idLoan:number){
    return this.httpClient.delete("http://localhost:8081/Loan/delete/"+ idLoan ,this.adminhttpOptions)
  }
 /*public getLoanStats() {
  this.httpClient.get<any>("http://localhost:8081/RequestLoan/loan/stats",this.adminhttpOptions).subscribe(data => {
    // set credit stats data
    this.approvedCount = data.approvedCount;
    this.declinedCount = data.declinedCount;
    // draw credit stats chart
    this.drawCreditStatsChart();
  });
  }*/

  getMonthlyPayment(idLoan: number){
    return this.httpClient.get("http://localhost:8081/Loan/payments/"+idLoan,this.adminhttpOptions);
  }
 
}
