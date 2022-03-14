import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() visible:any = false;
  @Input() data:any = null;
  @Input() url = null;
  @Input() type = null;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  close(): void {
    this.router.navigate(['dashboard']);
  }


}
