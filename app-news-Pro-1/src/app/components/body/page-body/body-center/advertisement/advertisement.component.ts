import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  imageQuangCao : string = 'assets/images/ve-may-bay.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
