import { Component, OnInit } from '@angular/core';
import { archivo, Person, Machine, Purchuse, Active } from '../../../core/models/Archivo.models';
import { ApiService } from '../../../core/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  habilitarCreate : boolean = false;
  habilitarUpdate : boolean = false;
  habilitarUpdate2 : boolean = false;
  habilitarDelete : boolean = false;
  confirmacioDelete : boolean = false;
  consultarCuidades : string = "";
  consultarArea : string = "";
  id : String = "";
  idDelete : string = ""+this.id;
  enviarActivo : Active = {
    id:null,
    type : null,
    city : null,
    nameEmployee : null,
    idEmployee : null,
    idPosition : null,
    positionResponsible : null,
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

  ngOnInit(): void {
  }

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

  Enviar(){
    this.habilitarCreate=false;
    //console.log("esto es el objeto que envio"+ this.enviarActivo);
    this.apiService.createActive(this.enviarActivo).subscribe();
    this.toastrService.success("Registro Guardado con exito");
    this.toastrService.success("Por favor actualizar la tabla");
  }


  buscar(){
    this.apiService.updateActivo(this.id).subscribe(data =>{
      this.enviarActivo = data
      if (data == null){
        this.habilitarUpdate2 = false;
        this.toastrService.error("El numero ingresado no pertenece a la tabla");
      } else {
        //console.log(this.enviarActivo);
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
