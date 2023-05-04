import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';
@Component({
  selector: 'app-education-loan',
  templateUrl: './education-loan.component.html',
  styleUrls: ['./education-loan.component.css']
})
export class  EducationLoanComponent {
  listProducts : any;
  product!: Product; 
  constructor(private service:ProductService){}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}


}
