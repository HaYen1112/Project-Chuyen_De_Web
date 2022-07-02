import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-body-center',
  templateUrl: './body-center.component.html',
  styleUrls: ['./body-center.component.scss']
})
@Injectable({ providedIn: 'root' })
export class BodyCenterComponent implements OnInit {
  @Input() descipt: any[] = [];
  today = new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
  stringJson: any;

  constructor(private com: AppComponent) {

  }
  // setDatas(url: string, dataItem: any[]) {
  //   const days = Number(this.jstoday.substr(8, 2));
  //   const hours = Number(this.jstoday.substr(11, 2));
  //   const minutes = Number(this.jstoday.substr(14, 2));
  //   const months = Number(this.jstoday.substr(5, 2));
  //   this.com.getData(url)
  //     .subscribe((value: any) => {
  //       // console.log(value['items']);
  //       // this.descipt.push((JSON.parse(JSON.stringify(item['description']))));
  //       for (let item of value['items']) {
  //         dataItem.push(item['thumbnail']);
  //         dataItem.push(item['title']);
  //         const day = days - Number(item['pubDate'].substr(8, 2));
  //         const minute = minutes - Number(item['pubDate'].substr(14, 2));
  //         const hour = hours - Number(item['pubDate'].substr(11, 2));
  //         const month = months - Number(item['pubDate'].substr(5, 2));
  //         if (month > 0) {
  //           dataItem.push(month + ' tháng trước');
  //         } else
  //           if (day > 0) {
  //             dataItem.push(day + ' ngày trước');
  //           } else {
  //             if (hour > 0) {
  //               dataItem.push(hour + ' giờ trước');
  //             } else {
  //               if (minute > 0) { dataItem.push(minute + ' phút trước') }
  //               else { dataItem.push(hour + 5 + ' giờ trước'); }
  //             }
  //           }
  //       }
  //     });
  // }
  // setLink(url: string, dataItem: any[]) {
  //   this.com.getData(url)
  //     .subscribe((value: any) => {
  //       for (let item of value['items'])
  //         dataItem.push(item['link']);
  //     });
  // }
 //lấy thời gian

  getTime(date: string) {
    //thời gian hiện tại
    const days = Number(this.jstoday.substr(8, 2));
    const hours = Number(this.jstoday.substr(11, 2));
    const minutes = Number(this.jstoday.substr(14, 2));
    const months = Number(this.jstoday.substr(5, 2));
    //tgian của link bài viết
    const day = days - Number(date.substr(8, 2));
    const minute = minutes - Number(date.substr(14, 2));
    const hour = hours - Number(date.substr(11, 2));
    const month = months - Number(date.substr(5, 2));

    if (month > 0) {
      return (month + ' tháng trước');
    } else
      if (day > 0) {
        return (day + ' ngày trước');
      } else {
        if (hour > 0) {
          return (hour + ' giờ trước');
        } else {
          if (minute > 0) { return (minute + ' phút trước') }
          else { return (hour + 5 + ' giờ trước'); }
        }
      }
    }
  //lấy dữ liệu file json từ link rss

  getDatas(urls: string, datas: any[]) {
    this.com.getData(urls)
      .subscribe((value: any) => {
        for (let item of value['items']) {
            datas.push({ image: item['thumbnail'], title: item['title'],
                  time: this.getTime(item['pubDate']), link: item['link'] });
             }
      });
  }

  ngOnInit(): void {
  }

}
