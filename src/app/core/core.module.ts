import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    UsuarioComponent,
    AdministradorComponent,
    ObjetivosComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule
    
  ],
  exports: [InicioComponent] 
})
export class CoreModule { }
