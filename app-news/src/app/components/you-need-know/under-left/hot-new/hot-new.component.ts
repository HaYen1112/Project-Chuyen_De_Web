import { Component, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from 'src/app/components/body/page-body/body-center/body-center.component';

@Component({
  selector: 'app-hot-new',
  templateUrl: './hot-new.component.html',
  styleUrls: ['./hot-new.component.scss']
})
export class HotNewComponent implements OnInit {
   url1 = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet.rss&api_key=hjpb9yjc64ebiz3g8uodqlqthop2adx5mkhfwtvq'.trim();
   url2 = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fmien-bac.rss&api_key=hjpb9yjc64ebiz3g8uodqlqthop2adx5mkhfwtvq'.trim();
   url3 = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fmien-nam.rss&api_key=hjpb9yjc64ebiz3g8uodqlqthop2adx5mkhfwtvq'.trim();
   @Input() data: any[];
   @Input() active1 = 'active';
   @Input() active2 = '';
   @Input() active3 = '';
  constructor(private bodycenter: BodyCenterComponent) {
    this.data = []
    this.bodycenter.getDatas(this.url1, this.data);
   }
   getdata1(){
    this.active2 ='';
    this.active1 ='active';
    this.active3 ='';
    this.data = []
    this.bodycenter.getDatas(this.url1, this.data);
   }
   getdata2(){
    this.data = []
    this.active1 ='';
    this.active2 ='active';
    this.active3 ='';
    this.bodycenter.getDatas(this.url2, this.data);
   }
   getdata3(){
    this.data = []
    this.active1 ='';
    this.active3 ='active';
    this.active2 ='';
    this.bodycenter.getDatas(this.url3, this.data);
   }
  ngOnInit(): void {
  }

}
