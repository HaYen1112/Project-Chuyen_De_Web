import { Component, OnInit,Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
@Injectable({ providedIn: 'root' })
export class FormLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
