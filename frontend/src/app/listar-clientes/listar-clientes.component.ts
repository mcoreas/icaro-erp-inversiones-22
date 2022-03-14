import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  public visibleM = false;
  public data:any = null;
  public url:any = "";
  public type:any = "";

  constructor(private apiService: ApiService, private route:Router) { }
  searchValue = '';
  visible = false;
  listOfData: Cliente[] = [];
  listOfDisplayData: Cliente[] = [];

  ngOnInit(): void {
    this.data = {
      campos: [
        {
        nombre: "Tipo Persona",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "DUI",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Razon Social",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Giro",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Registro Fiscal",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Tamaño de la Empresa",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Nombre",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Direccion",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Departamento",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Municipio",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Telefono",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Nombre Contacto",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "NIT",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Email",
        value: "",
        tipo: "email",
        data: null,
        readonly: false
      },{
        nombre: "Observaciones",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Percepcion",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Retencion",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Exento",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Credito",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Limite de Credito",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Dias Credito",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Activo",
        value: "A",
        tipo: "text",
        data: null,
        readonly: true
      },{
        nombre: "Cuenta Contable",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Tipo de Precio",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Empresa",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      },{
        nombre: "Saldo",
        value: "",
        tipo: "text",
        data: null,
        readonly: false
      },{
        nombre: "Fecha ingreso",
        value: "",
        tipo: "date",
        data: null,
        readonly: false
      },{
        nombre: "Sucursal",
        value: "",
        tipo: "select",
        data: null,
        readonly: false
      }
      ]
    };

    this.apiService.getData("clientes").subscribe(
      data => {
        const res:any = data;
        this.listOfData = res;
        this.listOfDisplayData = [...this.listOfData];
      },
      error =>{

      });

  }



  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: Cliente) => item.Nombre.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
  }

  agregar(){
    this.visibleM = true;
    this.type = "POST";
    this.url = "clientes";
    this.data.campos.forEach((item: any) =>{
      item.value = '';
      item.nombre === "Activo" ? item.value = 'A' : '';
    })
  }

  update(i:Cliente){
    this.visibleM = true;
    this.type = "PUT";
    this.url = "clientes";
    this.data.campos.forEach((item: any) =>{
      item.nombre === "Tipo Persona" ? item.value = i.TipoPersona : '';
      item.nombre === "DUI" ? item.value = i.Dui : '';
      item.nombre === "Razon Social" ? item.value = i.RazonSocial : '';
      item.nombre === "Giro" ? item.value = i.Giro : '';
      item.nombre === "Registro Fiscal" ? item.value = i.RegistroFiscal : '';
      item.nombre === "Tamaño de la Empresa" ? item.value = i.TamanoEmpresa : '';
      item.nombre === "Nombre" ? item.value = i.Nombre : '';
      item.nombre === "Direccion" ? item.value = i.Direccion : '';
      item.nombre === "Departamento" ? item.value = i.Departamento : '';
      item.nombre === "Municipio" ? item.value = i.Municipio : '';
      item.nombre === "Telefono" ? item.value = i.Telefono : '';
      item.nombre === "Nombre Contacto" ? item.value = i.NombreContacto : '';
      item.nombre === "NIT" ? item.value = i.NIT : '';
      item.nombre === "Email" ? item.value = i.Email : '';
      item.nombre === "Observaciones" ? item.value = i.Observaciones : '';
      item.nombre === "Percepcion" ? item.value = i.Percepcion : '';
      item.nombre === "Retencion" ? item.value = i.Retencion : '';
      item.nombre === "Exento" ? item.value = i.Exento : '';
      item.nombre === "Credito" ? item.value = i.Credito : '';
      item.nombre === "Limite de Credito" ? item.value = i.LimiteCredito : '';
      item.nombre === "Dias Credito" ? item.value = i.DiasCredito : '';
      item.nombre === "Activo" ? item.value = i.Activo : '';
      item.nombre === "Cuenta Contable" ? item.value = i.CuentaContable : '';
      item.nombre === "Tipo de Precio" ? item.value = '' : '';
      item.nombre === "Empresa" ? item.value = i.Empresa : '';
      item.nombre === "Saldo" ? item.value = i.Saldo : '';
      item.nombre === "Fecha ingreso" ? item.value = i.FechaIngreso : '';
      item.nombre === "Sucursal" ? item.value = i.Sucursal : '';

    })
  }

}

interface Cliente {
  Id:string;
  TipoPersona:string;
  Dui   :string;
  RazonSocial  :string;
  Giro :string;
  RegistroFiscal :string;
  TamanoEmpresa :string;
  Nombre :string;
  Direccion :string;
  Departamento :string;
  Municipio :string;
  Telefono :string;
  NombreContacto  :string;
  NIT :string;
  Email :string;
  Observaciones :string;
  Percepcion :string;
  Retencion :string;
  Exento :string;
  Credito :string;
  LimiteCredito :string;
  DiasCredito :string;
  Activo :string;
  CuentaContable :string;
  Empresa :string;
  Saldo :string;
  FechaIngreso :string;
  Sucursal :string;
}
