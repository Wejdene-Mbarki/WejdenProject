import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { StorageServiceService } from '../core/service/storage-service.service';
import { AuthServiceService } from '../core/service/auth-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {

  constructor(private storageService: StorageServiceService, private authService: AuthServiceService,private router: Router) { }
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
