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
  listOfData: Empleado[] = [];
  listOfDisplayData: Empleado[] = [];

  ngOnInit(): void {

    this.apiService.getData("empleados").subscribe(
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
    this.listOfDisplayData = this.listOfData.filter((item: Empleado) => item.Nombres.indexOf(this.searchValue) !== -1);
  }

}

interface Empleado {
  Id:string;
  CodigoEmpleado:string;
  Nombres   :string;
  Apellidos  :string;
  FechaNacimiento :string;
  NumeroDUI :string;
  NumeroNIT :string;
  Direccion :string;
  Municipio :string;
  Departamento :string;
  Telefono :string;
  Celular :string;
  ContactoEmergencia  :string;
  NumeroISSS :string;
  NumeroNUP :string;
  FechaIngreso :string;
  FechaEgreso :string;
  FechaContratacion :string;
  SalarioBase :string;
  Sucursal :string;
  InstitucionPrevisional :string;
  TelefonoEmergencia :string;
  HorasLaborales :string;
  Banco :string;
  CuentaDeBanco :string;
  CuentaPasivo :string;
  CuentaGasto :string;
  Comentario :string;
  CategoriaEmpleado :string;
  Fotografia :string;
  Estado :string;
  Profesion :string;
  EstadoCivil :string;
  PermiteCuadre :string;
  CargoEmpleado :string;
  FechaExpedicionDUI :string;
  LugarExpedicionDUI :string;
  Sexo :string;
  Nacionalidad :string;
  SaltoMarcacion :string;
  PoseeLicencia :string;
  ParentescoEmergencia :string;
  Horario :string;
  PagoCheque :string;
  NombresNIT :string;
  ApellidosNIT :string;
  TelefonoLaboral :string;
}
