import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { loan } from 'src/app/core/model/loan';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//request!: request ;
message:any;
  
listLoans : any; 
form : boolean = false;
 loan!: loan;
 closeResult! : string;


constructor(private service:RequestService){}
ngOnInit():void{
  
  this.service.getAllLoans().subscribe(res => this.listLoans = res);
}

 deletLoanByIdNow(Loan :loan){
  this.service.deletLoanById(Loan.idLoan).subscribe(res=>{
    let index= this.listLoans.indexOf(Loan);
    this.listLoans.splice(index,1);
  });
 }

}



