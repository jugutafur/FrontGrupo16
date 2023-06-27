import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { archivo, Person, Machine, Purchuse, Active } from '../../core/models/Archivo.models';
import { ApiService } from '../../core/services/service.service';
import { Busqueda } from '../../core/models/Optiones';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent {

  busqueda: number = 0;
  busquedaTipo: number = 0;
  busquedaFecha: Date;
  fechaconvert : string;
  busquedaSerial: string;
  nameCity : String = "";
  namePosition: String = "";
  nameType: String = "";
  tipoActivo: String = "";
  fechaEnviar : String = "";


  showTableType: boolean = false;
  optionsBusqueda: Array<Busqueda>;

  archives: archivo[]= [];
  enviarObjecto: archivo = {
    id: null,
    company: null,
    box: null,
    bag: null,
    folder: null,
    document: null
  };

  person :Person ={
    id : null,
    name : null,
    identification: null
  }

  machine : Machine = {
    id: null,
    nameMachine : null,
    dimensions  : null,
    description  : null,
    serie  : null,
    nameInsideInventory  : null,
    value  : null,
    dataPurchuse  : null,
  }

  purchuse : Purchuse = {
    id: null,
    namePurchuse : null,
    dimensions  : null,
    description  : null,
    serie  : null,
    nameInsideInventory  : null,
    valueActive  : null,
    dataPurchuse  : null,
  }

  active : Active[]=[];
  activeTipe : Active[]=[];
  activeDate : Active[]=[];

  archives22 : Active []= [
    {
      id : 1,
      type : "maquinaria",
      city : "string",
      nameEmployee : "string",
      idEmployee : 1,
      idPosition : 2,
      positionResponsible : "string",
      name : "compresor",
      description : "equipo para mantenimiento",
      tall  : "40cm",
      length  : "35cm",
      weight :"60kil",
      width : "13cm",
      serial  : "556h445gr",
      numberInsideInventory  : "2345",
      valueActive  : 45000,
      datePurchuse  : new Date("2020/08/05"),
    },
    {
      id : 2,
      type : "maquinaria",
      city : "string",
      nameEmployee : "string",
      idEmployee : 2,
      idPosition : 2,
      positionResponsible : "string",
      name : "edificio calle 23",
      description : "con capacidad de dos pisos",
      tall  : "10cm",
      length  : "37cm",
      weight :"40kil",
      width : "16cm",
      serial  : "4556h445gr",
      numberInsideInventory  : "2346",
      valueActive  : 45000,
      datePurchuse  : new Date("2021/07/05"),
    },
    {
      id : 3,
      type : "inmueble",
      city : "string",
      nameEmployee : "string",
      idEmployee : 2,
      idPosition : 2,
      positionResponsible : "string",
      name : "Minitractor",
      description : "Son tractores de pequeñas dimensiones y potencia",
      tall  : "56 metros",
      length  : "15metros",
      weight :"NA",
      width : "75 metros",
      serial  : "Fr23f9948",
      numberInsideInventory  : "2347",
      valueActive  : 90006000,
      datePurchuse  : new Date("2021/04/05"),
    },
    {
      id : 4,
      type : "material oficina",
      city : "string",
      nameEmployee : "string",
      idEmployee : 2,
      idPosition : 2,
      positionResponsible : "string",
      name : "computador",
      description : "200 gigas de memoria ram... ",
      tall  : "44cm",
      length  : "10 cm",
      weight :"NA",
      width : "19 cm",
      serial  : "er23358",
      numberInsideInventory  : "2348",
      valueActive  : 466000,
      datePurchuse  : new Date("2020/06/25"),
    }
  ]

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getArchives();
  }

  cargarSelectCiclo() {
    this.optionsBusqueda = [
        {value: 1, busqueda: 'Tipo'},
        {value: 2, busqueda: 'Fecha de Compra'},
        {value: 3, busqueda: 'Serial'},
    ]
  }

  getArchives(){
    this.active = this.archives22
  }

  searchType(busquedaTipo : number){
    if(busquedaTipo == 1 ){
      this.tipoActivo = "maquinaria";
      const isMatchActivo = activo => activo.type == this.tipoActivo;
      this.activeTipe = this.archives22.filter(isMatchActivo)
      console.log("estos son mis activos de tipo "+ this.tipoActivo);
      console.log(this.activeTipe);
      this.showTableType = true;
    }
    else if(busquedaTipo == 2){
      this.tipoActivo = "inmueble";
      const isMatchActivo = activo => activo.type == this.tipoActivo;
      this.activeTipe = this.archives22.filter(isMatchActivo)
      console.log("estos son mis activos de tipo "+ this.tipoActivo);
      console.log(this.activeTipe);
      this.showTableType = true;
    }
    else if(busquedaTipo == 3){
      this.tipoActivo = "material oficina";
      const isMatchActivo = activo => activo.type == this.tipoActivo;
      this.activeTipe = this.archives22.filter(isMatchActivo)
      console.log("estos son mis activos de tipo "+ this.tipoActivo);
      console.log(this.activeTipe);
      this.showTableType = true;
    }
    else{
      alert("por favor ingrese un tipo valido");
      this.showTableType = false;
    }

  }

  searchDate(busquedaFecha: Date){
    this.fechaEnviar = busquedaFecha.getFullYear()+"-"+ (busquedaFecha.getMonth()+1) + "-"+ busquedaFecha.getDate();
    if(busquedaFecha){
      this.apiService.getByDate(this.fechaEnviar)
      .subscribe(data =>{
        this.activeDate = data;
      })
      this.showTableType = true;
    }else{
      alert("por favor ingrese un tipo valido");
      this.showTableType = false;
    }
  }

  searchSerie(busquedaSerial: string){
    this.showTableType = true;
    console.log(this.busquedaSerial);
    this.apiService.getBySerie(this.busquedaSerial)
      .subscribe( data=>{
        this.activeTipe = data
      })
  }

}
