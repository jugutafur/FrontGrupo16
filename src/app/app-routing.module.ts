import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layout/principal/principal.component';
import { LoginComponent } from './share/components/login/login.component';
import { RegisterComponent } from './share/components/register/register.component'; // Asegúrate de que la ruta sea correcta


const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent  // Asegúrate de que la ruta sea correcta
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
