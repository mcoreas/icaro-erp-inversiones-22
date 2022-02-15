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

  constructor(private apiService: ApiService, private route:Router) {
  }

  ngOnInit(): void {
    this.initPage();
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

    // this.apiService.getData("modulos/1").subscribe(
    //   data => {
    //     const res:any = data;
    //     res['modulos'].forEach((m:any) => {
    //       const menu = new Menu();
    //       menu.nombre = m.modulo;
    //       menu.icon = m.icon;

    //       res['submodulos'].forEach((s:any) => {
    //         if(s.IdModulo === m.Id){
    //           const submodulos = new SubModulos();
    //           submodulos.nombre = s.submodulos;
    //           submodulos.accion = [];

    //           res['acciones'].forEach((a:any) => {
    //             if(a.submodulo === s.Id){
    //               submodulos.accion.push(a);
    //             }
    //           });
    //           menu.modulos = submodulos;
    //         }
    //       });

    //       this.menu.push(menu);

    //     })

    //     console.log(this.menu);

    //   },
    //   err =>{

    //   }
    // )


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
