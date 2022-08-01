import { Component, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/model/user';
import { LoginService } from 'src/service/login.service';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class FormLoginComponent implements OnDestroy {
  user: User = new User();
  subscription: Subscription = new Subscription();
  subGetParam: Subscription = new Subscription();
  constructor(private router: Router, private loginService: LoginService) {
    this.isLogged();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subGetParam.unsubscribe();
  }

  isLogged(): void {
    if (this.loginService.isLogged()) {
      this.router.navigate(['/']);
    }
  }

  onClickLogin(): void {
    this.subscription = this.loginService
      .login(this.user)
      .subscribe((response) => {
        if (response.data != null) {
          let roles: string[] = [];
          roles.push(...response.data.roles);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('roles', JSON.stringify(roles));
          let lastParam = this.router.url.split('/').pop();
          if (lastParam === 'gio-hang') {
            this.router.navigate(['/shoppingcart']);
          } else {

            roles.forEach((element) => {
              if (element == 'ROLE_ADMIN') {
                this.router.navigate(['/admin']);
              } else {
                this.router.navigate(['/']);
              }
            });
          }
        } else {
          alert(response.message);
        }
      });
  }
}
