import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { loan } from 'src/app/core/model/loan';
import { PdfService } from 'src/app/core/service/pdf.service';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  
})
export class ListClientComponent implements OnInit {
  message:any;
  
  listLoans : any; 
  form : boolean = false;
   closeResult! : string;
  
  
  constructor(private servicepdf:PdfService ,private service:RequestService,private activatedRoute:ActivatedRoute ){}
  ngOnInit():void{
  
    this.service.getAllLoans().subscribe(res => this.listLoans = res);
  }
  
  generatePdf() {
    let idLoan = this.activatedRoute.snapshot.params['idLoan'];
    console.log(idLoan);
    
    this.servicepdf.generatePdf(idLoan).subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(blob, 'nom-du-fichier.pdf');
    });
  }
  
}

