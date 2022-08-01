import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss','../asset2/css/bootstrap.min.css','../asset2/css/fontawesome.min.css','../asset2/css/templatemo-style.css']
})
@Injectable({providedIn: 'root'})
export class AdminMenuComponent implements OnInit {
  @Input() act: string ='';
  constructor(private router:Router,public loginService: LoginService){
      if(this.router.url=='/admin/product/add'||this.router.url=='/admin/product/edit'){
        this.act='active';
      }

  }
  ngOnInit(): void {
  }
  onClickLogout() {
    localStorage.setItem('roles', '');
    localStorage.setItem('token', '');
    this.router.navigate(['/dangnhap']);
  }
}
