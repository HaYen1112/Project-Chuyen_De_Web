import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/model/user';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss'],
})
export class FormSignupComponent implements OnDestroy {
  user: User = new User();
  subRegister: Subscription = new Subscription();

  constructor(private loginService: LoginService, private router: Router) {
    this.isLogged();
  }

  ngOnDestroy(): void {
    this.subRegister.unsubscribe();
  }

  isLogged(): void {
    if (this.loginService.isLogged()) {
      this.router.navigate(['/']);
    }
  }

  onClickRegister(event: any) {
    let email = event.target.email.value;
    let fullName = event.target.fullName.value;
    let password = event.target.password.value;
    let phoneNumber = event.target.phoneNumber.value;
    if (password == '' || fullName == '' || email == '' || phoneNumber == '') {
      alert('Vui lòng điền đầy đủ thông tin!');
    } else {
      this.subRegister = this.loginService
        .register(this.user)
        .subscribe((response) => {
          alert(response.message);
          if (response.data) {
            this.router.navigate(['/dangnhap']);
          }
        });
    }
  }
}
