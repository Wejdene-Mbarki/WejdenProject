import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  listProducts : any;
  product!: Product; 
  constructor(private service:ProductService){}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}


}
