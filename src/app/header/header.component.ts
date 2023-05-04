import { Component } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { StorageServiceService } from '../core/service/storage-service.service';
import { AuthServiceService } from '../core/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private service:CartService,private storageService: StorageServiceService, private authService: AuthServiceService,private router: Router) { }

  createCartNow() {
    this.service.createCart().subscribe(cart => console.log(cart));
  }

  isLoggedIn = false;
  isLoginFailed = false;
 
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
