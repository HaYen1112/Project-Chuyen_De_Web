import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-ad-left',
  templateUrl: './img-ad-left.component.html',
  styleUrls: ['./img-ad-left.component.scss']
})
export class ImgAdLeftComponent implements OnInit {
  imgnews: string = 'https://image.thanhnien.vn/660x370/uploaded/khanhhoan/2021_06_15/anhchay3_lfcd.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
