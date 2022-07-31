
import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../body/page-body/body-center/body-center.component';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() datas: any[];
  private url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh.rss'.trim();
    constructor(private bodyCenter: BodyCenterComponent) {
      this.datas =bodyCenter.dataProduct;
      //this.bodyCenter.getDatas(this.url, this.datas);
     }
  ngOnInit(): void {
  }

}


