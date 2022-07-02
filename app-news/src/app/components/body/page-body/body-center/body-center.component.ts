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
  @Input() dataProduct: any[] = [
    { price: "400.000 đồng",title: 'Đồng hồ Casio', image:"/assets/images/slider_dh1.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Vàng kim', image:"/assets/images/sp1.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Điện tử', image:"/assets/images/spe5.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Casio', image:"/assets/images/sp_large_1.jpg", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Luxury', image:"/assets/images/sp2.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Thông minh', image:"/assets/images/spe7.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Casio', image:"/assets/images/sp_large_5.jpg", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Việt nam', image:"/assets/images/sp3.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Thông minh', image:"/assets/images/spe8.png", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
    { price: "400.000 đồng",title: 'Đồng hồ Singapor', image:"/assets/images/sp_large_2.jpg", decription:"Nổi bật với thiết kế cực kỳ thể thao mạnh mẽ, nam tính với màu đen làm chủ đạo và mặt đồng hồ vàng sang trọng. Điểm đặc biệt nhất của GBA-400-1A9 là được trang bị thiết bị Bluetooth SMART, giúp bạn thiết lập kết nối với điện thoại thông minh"},
   ];
  today = new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
  stringJson: any;

  constructor(private com: AppComponent) {

  }

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
