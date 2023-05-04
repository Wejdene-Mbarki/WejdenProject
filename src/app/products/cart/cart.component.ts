import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
idCart!:number;
constructor(private service:CartService){}

createCartNow() {
  this.service.createCart().subscribe(cart => console.log(cart));
}
}
