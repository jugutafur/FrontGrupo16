import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    fgValidacion = this.fb.group({
    username: ['', [ Validators.required]],
    password:  ['', [ Validators.required]]
  });

  constructor(
     private fb: FormBuilder,
    private router: Router
  ) { }

  username: string =  "admin";
  password: string = "1234";

  ngOnInit(): void {
  }

  identificarusuario(){
    let usuario = this.fgValidacion.controls["username"].value as string;
    let password = this.fgValidacion.controls["password"].value as string;
    if (this.username == usuario && this.password == password){
      this.router.navigate(['/principal'])
    }

  }
}
