import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  form: any = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    birthDate: null,
    roles: [] 

  };

  roles: string[] = []; // Ajouter cette ligne

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
     
  }

  onSubmit(): void {
    const { firstName , lastName , username , email ,password ,birthDate,roles}  = this.form;
  
    console.log('Form data before sending:', this.form); // Ajouté
  
    if (roles.length === 0) {
      this.errorMessage = 'Veuillez sélectionner au moins un rôle';
      this.isSignUpFailed = true;
      return;
    }

    this.authService.register( firstName , lastName , username , email ,password ,birthDate,roles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/signin']);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
 onRoleChange(event: any): void {
    const role = event.target.value;
    console.log('Role change:', role, event.target.checked); // Ajouté
  
    if (event.target.checked) {
      this.form.roles.push(role);
    } else {
      this.form.roles = this.form.roles.filter((r: string) => r !== role);
    }
    console.log('Roles after change:', this.form.roles); // Ajouté
  }
}
