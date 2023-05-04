import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router) { }

  ngOnInit(): void {
      

  }
  
  onSubmit(): void {
    const { username, password } = this.form;
  
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (this.roles.includes('ROLE_CLIENT')) {
          this.router.navigate(['/client/home']);
        }
        else if (this.roles.includes('ROLE_INVESTOR')) {
          this.router.navigate(['/client/home']);
        }
        else if (this.roles.includes('ROLE_AGENT')) {
          this.router.navigate(['/client/home']);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
  
}

