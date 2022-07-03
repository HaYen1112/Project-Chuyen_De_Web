import { Component, OnInit,Injectable } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
@Injectable({ providedIn: 'root' })
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
