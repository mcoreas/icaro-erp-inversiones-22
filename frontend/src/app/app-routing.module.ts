import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralComponent } from './general/general.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "empleados", component: ListarEmpleadosComponent
  },
  {
    path: "clientes", component: ListarClientesComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "general", component: GeneralComponent
  },
  {
    path: "**", component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
