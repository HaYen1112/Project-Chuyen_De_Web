import { Component,Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../../../body-center.component';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() dataMostRecent : any[];
  @Input() dataQP : any[];
  @Input() dataCN : any[];
  // thời sự
  private urlMostRecent =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fdan-sinh.rss'
  //Quốc phòng
  private urlOP ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquoc-phong.rss';
 //Công nghệ
  private urlCN ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fchuyen-doi-so.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
  constructor(private underRight: BodyCenterComponent) {
    this.dataMostRecent =underRight.dataProduct;
    this.dataQP = [];
    this.dataCN = [];
   // this.underRight.getDatas(this.urlMostRecent, this.dataMostRecent);
    this.underRight.getDatas(this.urlOP, this.dataQP);
    this.underRight.getDatas(this.urlCN, this.dataCN);
  }

  ngOnInit(): void {
  }

}
