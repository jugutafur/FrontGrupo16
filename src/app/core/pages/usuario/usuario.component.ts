import { Component } from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss'],
    standalone: false
})
export class UsuarioComponent  {

  usuarios = [
    { nombre: 'Dario Lopez', correo: 'Dariolopez@gmail.com', contrasena: '8844sdfer', rol: 'Administrador', seleccionado: false },
    { nombre: 'Camila Cifuentes', correo: 'CamilaCifuentes@gmail.com', contrasena: '29123svx', rol: 'Usuario', seleccionado: false }
  ];

  usuarioEditando: any = { nombre: '', correo: '', contrasena: '', rol: '', seleccionado: false };
  usuarioOriginal: any = null;
  mostrarPopup: boolean = false;
  modo: 'crear' | 'actualizar' | 'eliminar' = 'crear';

  abrirPopup(modo: 'crear' | 'actualizar' | 'eliminar') {
    this.modo = modo;

    if (modo === 'crear') {
      this.usuarioEditando = { nombre: '', correo: '', contrasena: '',  rol: '', seleccionado: false };
      this.usuarioOriginal = null;
      this.mostrarPopup = true;
    } else {
      const usuarioSeleccionado = this.usuarios.find(usuario => usuario.seleccionado);

      if (usuarioSeleccionado) {
        this.usuarioOriginal = usuarioSeleccionado; 
        this.usuarioEditando = { ...usuarioSeleccionado };
        this.mostrarPopup = true;
      } else {
        alert('Por favor selecciona un usuario.');
      }
    }
  }

  guardarCambios() {
    if (this.modo === 'crear') {
      this.usuarios.push({ ...this.usuarioEditando, seleccionado: false });
    } else if (this.modo === 'actualizar') {
      this.usuarioOriginal.nombre = this.usuarioEditando.nombre;
      this.usuarioOriginal.correo = this.usuarioEditando.correo;
      this.usuarioOriginal.contrasena = this.usuarioEditando.contrasena;
      this.usuarioOriginal.rol = this.usuarioEditando.rol;
      this.usuarioOriginal.seleccionado = false;
    } else if (this.modo === 'eliminar') {
      this.usuarios = this.usuarios.filter(u => u !== this.usuarioOriginal);
    }

    this.mostrarPopup = false;
    this.usuarioOriginal = null;
  }

  cancelarEdicion() {
    this.mostrarPopup = false;
    this.usuarioOriginal = null;
  }

}
