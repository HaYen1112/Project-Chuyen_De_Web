import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component,Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../body-center.component';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('animationPhoto', [
      transition('* => *', [
        query('div', style({transform: 'translateX(-1500px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-1250px)'}))])),
        query('div', style({transform: 'translateX(-1250px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-1000px)'}))])),
        query('div', style({transform: 'translateX(-1000px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-750px)'}))])),
        query('div', style({transform: 'translateX(-750px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-500px)'}))])),
        query('div', style({transform: 'translateX(-500px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-250px)'}))])),
        query('div', style({transform: 'translateX(-250px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(0px)'}))]))
      ])
    ])]
})
export class NewsComponent implements OnInit {
  @Input() images = [1,2,3,4,5,6,7,8,9,10];
  @Input() dataKP: any[];
  @Input() dataVideo: any[];
  //@Input() dataLink: any[];
  show = true;

  urlKP ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss&api_key=8rhq1qggacg7vqdw0oxezforxw39rfhvlytwallw';
  urlVideo ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fket-noi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf'
  constructor(private newBodyCenter: BodyCenterComponent) {
    //Khám phá
    this.dataKP = newBodyCenter.dataProduct;
    //video
    this.dataVideo =[];
    //link
    // this.dataLink = [];
    // this.newBodyCenter.getDatas(this.urlKP, this.dataKP);
    // this.newBodyCenter.getDatas(this.urlVideo, this.dataVideo);

  }
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    }, 30000);
  }
}
