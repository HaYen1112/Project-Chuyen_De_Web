import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
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
export class FormLoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  subscription: Subscription = new Subscription();
  constructor(private router: Router, private loginService: LoginService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLogged();
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
          localStorage.setItem('token', response.data);
          this.router.navigate(['/']);
        } else {
          alert(response.message);
        }
      });
  }
}
