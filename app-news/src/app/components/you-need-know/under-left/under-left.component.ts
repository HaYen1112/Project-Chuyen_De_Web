import { Component, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../../body/page-body/body-center/body-center.component';

@Component({
  selector: 'app-under-left',
  templateUrl: './under-left.component.html',
  styleUrls: ['./under-left.component.scss']
})

export class UnderLeftComponent implements OnInit {
  urlSlide = " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthe-gioi.rss&api_key=8rhq1qggacg7vqdw0oxezforxw39rfhvlytwallw".trim();
  urlnewhot ="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss&api_key=8rhq1qggacg7vqdw0oxezforxw39rfhvlytwallw".trim();
  urlnew = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquyen-duoc-biet.rss&api_key=8rhq1qggacg7vqdw0oxezforxw39rfhvlytwallw".trim();
  @Input() DataSlide : any[];
  @Input() Datanew : any[];
  @Input() Datanewhot : any[];

  constructor(private cate : BodyCenterComponent) {
    this.DataSlide = [];
    this.Datanew = [];
    this.Datanewhot= [];
    this.cate.getDatas(this.urlSlide, this.DataSlide);
    this.cate.getDatas(this.urlnew, this.Datanew);
    this.cate.getDatas(this.urlnewhot, this.Datanewhot);

   }

  ngOnInit(): void {
  }

}
