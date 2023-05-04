import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4Mjc4ODcyOCwiZXhwIjoxNjgyODc1MTI4fQ.gVv9Sn8IAYlzbqYwRmBNjXpQyY6Di5HQlpE2vqZFn1JUH7bGTa_K-nUSpgbETGzx9uYFerB1NMU1571Q-OEmIg"})
     
      };
  }
  generatePdf(idLoan: number) {
    return this.httpClient.get("http://localhost:8081/PDF/generate-pdf/"+idLoan,this.adminhttpOptions);
  }
}
