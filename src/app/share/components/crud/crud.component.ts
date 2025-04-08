import { Component } from '@angular/core';
import { archivo, Person, Machine, Purchuse, Active } from '../../../core/models/Archivo.models';
import { ApiService } from '../../../core/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.scss'],
    standalone: false
})
export class CrudComponent {

  habilitarCreate : boolean = false;
  habilitarUpdate : boolean = false;
  habilitarUpdate2 : boolean = false;
  habilitarDelete : boolean = false;
  confirmacioDelete : boolean = false;
  consultarCuidades : string = "";
  consultarArea : string = "";
  id : String = "";
  idDelete: string = "";
  enviarActivo : Active = {
    id:null,
    type : null,
    name : null,
    description : null,
    tall  : null,
    length  : null,
    weight :null,
    width : null,
    serial  : null,
    numberInsideInventory  : null,
    valueActive  : null,
    datePurchuse  : null
  }
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) { }

  create(){
    this.habilitarCreate=true;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
    this.habilitarDelete = false;
  }

  update(){
    this.habilitarCreate=false;
    this.habilitarDelete = false;
    this.habilitarUpdate = true;
  }

  Eliminar(){
    this.habilitarDelete = true;
    this.habilitarCreate=false;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
  }

  Enviar() {
    this.habilitarCreate = false;
    console.log("Objeto que envío:", this.enviarActivo);
    this.toastrService.success("Registro guardado con éxito");
    this.toastrService.success("Por favor actualizar la tabla");
  }


  buscar(){
    this.apiService.updateActivo(this.id).subscribe(data =>{
      this.enviarActivo = data
      if (!data) {
        this.habilitarUpdate2 = false;
        this.toastrService.error("El número ingresado no pertenece a la tabla");
      } else {
        this.enviarActivo = data;
        this.habilitarUpdate2 = true;
      }
    });
  }

  EliminarArchive(){
    this.apiService.DeleteActive(this.idDelete).subscribe(data => {
      this.confirmacioDelete = data;
      if(this.confirmacioDelete){
        this.toastrService.success("Borrado Exitoso");
        this.toastrService.success("Por favor actualizar la tabla");
      }else {
        //this.toastrService.error("El numero ingresado no pertenece a la tabla");
      }
    })
  }
}
