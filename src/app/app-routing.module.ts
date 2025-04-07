import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layout/principal/principal.component';
import { LoginComponent } from './share/components/login/login.component';
import { RegisterComponent } from './share/components/register/register.component'; // Asegúrate de que la ruta sea correcta

import { UsuarioComponent } from './core/pages/usuario/usuario.component';
import { AdministradorComponent } from './core/pages/administrador/administrador.component';
import { ContactoComponent } from './core/pages/contacto/contacto.component';
import { ObjetivosComponent } from './core/pages/objetivos/objetivos.component';
import { InicioComponent } from './core/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Usuario',
    component: UsuarioComponent
  },
  {
    path: 'Administrador',
    component: AdministradorComponent
  },
  {
    path: 'Contacto',
    component: ContactoComponent
  },
  {
    path: 'Objetivos',
    component: ObjetivosComponent
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
