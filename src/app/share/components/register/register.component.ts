import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  fgRegister = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  registrarse() {
    if (this.fgRegister.valid) {
      console.log("Usuario registrado:", this.fgRegister.value);
      alert("Registro exitoso");
    } else {
      alert("Formulario inválido");
    }
  }
}
