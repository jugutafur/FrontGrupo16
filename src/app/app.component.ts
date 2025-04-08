import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Formularios template-driven

@Component({
    selector: 'app-root', // ✅ el selector debe ser 'app-root'
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent { // ✅ el nombre de la clase debe ser AppComponent
  habilitarCreate = false;
  habilitarUpdate = false;
  habilitarUpdate2 = false;
  habilitarDelete = false;
  confirmarEliminar = false;
  loading = false;
  mensajeExito = '';
  mensajeError = '';
  id = '';
  idDelete = '';

  enviarActivo = {
    type: '',
    name: '',
    description: '',
    serial: '',
    numberInsideInventory: '',
    tall: 0,
    length: 0,
    width: 0,
    weight: 0,
    valueActive: 0,
    datePurchuse: new Date().toISOString().split('T')[0]
  };

  create() {
    this.resetForms();
    this.habilitarCreate = true;
  }

  update() {
    this.resetForms();
    this.habilitarUpdate = true;
  }

  Eliminar() {
    this.resetForms();
    this.habilitarDelete = true;
  }

  resetForms() {
    this.habilitarCreate = false;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
    this.habilitarDelete = false;
    this.confirmarEliminar = false;
  }

  Enviar() {
    this.loading = true;
    // Lógica de envío aquí
    this.loading = false;
  }

  buscar() {
    this.habilitarUpdate2 = true;
  }

  EliminarArchive() {
    this.confirmarEliminar = true;
  }

  confirmarEliminacion() {
    // Lógica de eliminación aquí
    this.resetForms();
  }

  cancelarEliminacion() {
    this.confirmarEliminar = false;
  }
}
