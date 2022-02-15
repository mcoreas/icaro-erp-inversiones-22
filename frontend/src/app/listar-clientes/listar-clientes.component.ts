import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  constructor(private apiService: ApiService, private route:Router) { }
  searchValue = '';
  visible = false;
  listOfData: Cliente[] = [];
  listOfDisplayData: Cliente[] = [];

  ngOnInit(): void {

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
