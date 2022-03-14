import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router) {
   }

   public token = localStorage.getItem('token');

  ngOnInit(): void {
    this.token = this.apiService.getToken();
    if(this.token === null){
      this.route.navigate(['/login']);
    }

  }

}
