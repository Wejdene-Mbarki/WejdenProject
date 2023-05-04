import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';
@Component({
  selector: 'app-CREATIVE',
  templateUrl: './CREATIVE.component.html',
  styleUrls: ['./CREATIVE.component.css']
})
export class CREATIVEComponent {
  listProducts : any;
  product!: Product; 
  constructor(private service:ProductService){}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}


}
