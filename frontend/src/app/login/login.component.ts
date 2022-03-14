import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';

declare var CryptoJS:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token = localStorage.getItem('token');
  public usuario = null;
  public password = null;

  constructor(private apiService: ApiService, private message: NzMessageService, private route:Router) { }

  ngOnInit(): void {
    this.token = this.apiService.getToken();
    if(this.token != null){
      this.route.navigate(['/dashboard']);
    }

  }


  login(){
    const data = {
      usuario: this.usuario,
      password: CryptoJS.MD5(this.password).toString()
    }
    console.log(data);
    this.apiService.postData("login",data).subscribe(
      data => {
        const res:any = data;
        if(res.codigo === "01"){
          localStorage.setItem("usuario",res.usuario);
          localStorage.setItem("token",res.token);
          this.token = this.apiService.getToken();
          this.route.navigate(['dashboard']);
        }else{
          this.createMessage('error','Credenciales incorrectas');
        }
      },
      error =>{
        this.createMessage('error','Credenciales incorrectas');
      });
  }

  createMessage(type: string,text: string): void {
    this.message.create(type, text);
  }



}
