import { Component } from '@angular/core';
import { ForgotPasswordService } from 'src/app/core/service/forgot-password.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  
  
  resetPassRequest = {
    email: '',
    resetpasswordcode: '',
    password: ''
  };

  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: ForgotPasswordService) { }

  onResetPassword() {
    this.userService.resetPassword(this.resetPassRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Mot de passe réinitialisé avec succès!';
        this.errorMessage = '';
      },
      error => {
        console.log(error);
        this.successMessage = '';
        this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
      }
    );
  }
}