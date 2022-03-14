import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  public menu: Array<Menu> = [];
  public errorMessage = null;
  public token = localStorage.getItem('token');

  constructor(private apiService: ApiService, private route:Router) {
  }

  ngOnInit(): void {
    this.initPage();
    this.token = this.apiService.getToken();
  }

  validateToken(){
    this.token = this.apiService.getToken();
    return this.token;
  }

  initPage() {
    const $el = document.querySelector('#init');

    if ($el) {
      const html = `
      <script src="assets/js/soft-ui-dashboard.js"></script>
      `;
      const fragment = document.createRange().createContextualFragment(html);
      $el.appendChild(fragment);
    }

  }

  redireccionarPagina(accion:any){
    if(accion === 'Listado de Empleados'){
      this.route.navigate(['lista-empleados']);
    }
    if(accion === 'Listado de Clientes'){
      this.route.navigate(['lista-clientes']);
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.token = this.apiService.getToken();
    this.route.navigate(['login']);
  }

}


export class Menu {
  nombre: any;
  icon: any;
  modulos: any;
}

export class SubModulos{
  nombre: any;
  accion: any;
}
