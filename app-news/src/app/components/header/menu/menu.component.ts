
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@Injectable({ providedIn: 'root' })
export class MenuComponent implements OnInit {
  public keyword: string;
  @Input() dataTM: any[];
  private urlNew = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
  @Input() dataCM: any[] = [
    { header: 'VIDEO', data: ['THỜI SỰ', 'PHÓNG SỰ', 'GIẢI TRÍ', 'MÓN NGON', 'THỂ THAO', 'THẾ GIỚI', 'TRỰC TUYẾN'] },
    { header: 'THỜI SỰ', data: ['CHÍNH TRỊ', 'PHÁP LUẬT', 'DÂN SINH', 'LAO ĐỘNG - VIỆC LÀM', 'QUYỀN ĐƯỢC BIẾT', 'PHÓNG SỰ / ĐIỀU TRA', 'QUỐC PHÒNG', 'VƯỢT QUA COVID-19'] },
    { header: 'THẾ GIỚI', data: ['KINH TẾ THẾ GIỚI', 'QUÂN SỰ', 'GÓC NHÌN', 'HỒ SƠ', 'NGƯỜI VIỆT NĂM CHÂU', 'CHUYỆN LẠ'] },
    { header: 'VĂN HÓA', data: ['CÂU CHUYỆN VĂN HÓA', 'KHẢO CỨU', 'XEM - NGHE', 'HÀ NỘI THÀNH PHỐ TÔI YÊU', 'SỐNG ĐẸP', 'MÓN NGON HÀ NỘI'] },
    { header: 'GIẢI TRÍ', data: ['PHIM', 'TRUYỀN HÌNH', 'ĐỜI NGHỆ SĨ'] },
    { header: 'THỂ THAO', data: ['EURO 2020', 'BÓNG ĐÁ VIỆT NAM', 'SÔI ĐỘNG CÙNG V-LEAGUE', 'BÓNG ĐÁ QUỐC TẾ', 'TIN CHUYỂN NHƯỢNG', 'BÓNG RỔ', 'THỂ THAO & CỘNG ĐỒNG', 'THỂ THAO KHÁC'] },
    { header: 'ĐỜI SỐNG', data: ['NGƯỜI SỐNG QUANH TA', 'GIA ĐÌNH', 'ẨM THỰC', 'CỘNG ĐỒNG', 'GƯƠNG SÁNG BIÊN CƯƠNG'] },
    { header: 'TÀI CHÍNH - KINH DOANH', data: ['KINH TẾ XANH', 'CHÍNH SÁCH & PHÁT TRIỂN', 'NGÂN HÀNG', 'CHỨNG KHOÁN', 'DOANH NGHIỆP', 'DOANH NHÂN', 'TIÊU DÙNG', 'LÀM GIÀU', 'ĐỊA ỐC'] },
    { header: 'GIỚI TRẺ', data: ['SỐNG -YÊU - ĂN - CHƠI', 'THẾ GIỚI MẠNG', 'KẾT NỐI', 'ĐOÀN - HỘI'] },
    { header: 'GIÁO DỤC', data: ['TUYỂN SINH 2021', 'HỘP TƯ VẤN 24/7', 'DU HỌC', 'CHỌN NGHỀ', 'CHỌN TRƯỜNG', 'NGƯỜI THẦY', 'CẨM NANG TUYỂN SINH 2021'] },
    { header: 'CÔNG NGHỆ', data: ['XU HƯỚNG', 'SẢN PHẨM MỚI', 'KINH NGHIỆM', 'Ý TƯỞNG', 'CHUYỂN ĐỔI SỐ'] },
    { header: 'GAME', data: ['ESPORTS', 'THỦ THUẬT', 'PHÒNG MÁY', 'CÔNG NGHỆ GAME', 'CỘNG ĐỒNG', 'VIDEO'] },
    { header: 'SỨC KHỎE', data: ['LÀM ĐẸP', 'KHỎE ĐẸP MỖI NGÀY', 'GIỚI TÍNH', 'SỐNG VUI KHỎE'] },
    { header: 'DU LỊCH', data: ['KHÁM PHÁ', 'A - Z', 'SĂN TOUR'] },
    { header: 'XE', data: ['THỊ TRƯỜNG XE', 'TƯ VẤN XE', 'DIỄN ĐÀN XE', 'ĐÁNH GIÁ XE', 'KHÁM PHÁ XE', 'VIDEO'] }
  ];

  routerHome: string = '/';
  routerBCB: string = 'bancanbiet';
  constructor(private menu: AppComponent, private router: Router) {
    this.dataTM = [];
    this.setDataTM(this.urlNew);
    this.colorTextDN = '';
    this.colorBackgroundDN = '';
    this.keyword = '';

    if (this.router.url == '/bancanbiet') {
      this.titleBCB = 'TIN TỨC NHANH';
      this.titleHome = 'BẠN CẦN BIẾT';
      this.paddingHome = 10;
      this.paddingBCB = 15;
      this.displayHome = 'none';
      this.displayBCB = 'none'
      this.fontw = 'bold';
      this.routerBCB = '/';
      this.routerHome = 'bancanbiet';
      this.size = 15;

    }
    if (this.router.url == '/') {
      this.titleHome = 'THỜI THƯỢNG';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingHome = 0;
      this.paddingBCB = 10;
      this.displayHome = '';
      this.displayBCB = ''
      this.fontw = '';
      this.size = 0;
      this.routerBCB = 'bancanbiet';
      this.routerHome = '/';
    }
    if (this.router.url == '/dangnhap') {
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingBCB = 10;
      this.colorTextDN = 'black';
      this.colorBackgroundDN = 'white';
    }
    if (this.router.url == '/search') {
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingBCB = 10;
    }
  }

  navigationExtras?: NavigationExtras;
  view2(index1: number, index2: number, title: string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [index1, index2, title];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
    });
  }
  view1(index1: number, title: string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [index1, title];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
     // console.log(index);
    });
  }
  view3(): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [this.keyword];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
    });
  }
  getDisplay(title: string) {
    if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021')) return 'block';
    return 'none';
  }
  setDataTM(urls: string) {
    this.menu.getData(urls)
      .subscribe((value: any) => {
        for (let item of value['items']) {
          this.dataTM.push({ title: item['title'], time: item['pubDate'].substr(11, 5), link: item['link'] });
        }
      });
  }
  setColor(index: any) {
    this.colorTextDN = ''; this.colorBackgroundDN = '#00bfc5';
    this.colorTextDanhMuc = ''; this.colorBackgroundDanhMuc = '';
    this.colorTextTienIch = ''; this.colorBackgroundTienIch = '';
    this.colorTextTimKiem = ''; this.colorBackgroundTimKiem = '';
    this.colorTextDCB = ''; this.colorBackgroundDCB = '';
    this.colorTextVL = ''; this.colorBackgroundVL = '';
    this.colorTextLH = ''; this.colorBackgroundLH = '';
    this.displayCM1 = 'block'; this.displayCM2 = 'none';
    this.displayTI1 = 'block'; this.displayTI2 = 'none';
    this.displayVL1 = 'block'; this.displayVL2 = 'none';
    this.displayTK1 = 'block'; this.displayTK2 = 'none';
    this.displayLH1 = 'block'; this.displayLH2 = 'none';
    this.displayTM1 = 'block'; this.displayTM2 = 'none';
    if (index == 'chuyenmuc') {
      this.colorBackgroundDanhMuc = 'white'; this.colorTextDanhMuc = 'black';
      this.displayCM2 = 'block'; this.displayCM1 = 'none';
      this.indDM++;
      if (this.indDM > 1) {
        this.colorBackgroundDanhMuc = ''; this.colorTextDanhMuc = '';
        this.displayCM1 = 'block'; this.displayCM2 = 'none';
        this.indDM = 0;
      }
      this.indTK = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'tienich') {
      this.colorTextTienIch = 'black'; this.colorBackgroundTienIch = 'white';
      this.indTI++; this.displayTI2 = 'block'; this.displayTI1 = 'none';
      this.indTK = 0; this.indDM = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
      if (this.indTI > 1) {
        this.displayTI1 = 'block'; this.displayTI2 = 'none';
        this.colorTextTienIch = ''; this.colorBackgroundTienIch = '';
        this.indTI = 0;
      }
    }
    if (index == 'timkiem') {
      this.colorTextTimKiem = 'black'; this.colorBackgroundTimKiem = 'white';
      this.indTK++; this.displayTK2 = 'block'; this.displayTK1 = 'none';
      if (this.indTK > 1) {
        this.colorTextTimKiem = ''; this.colorBackgroundTimKiem = '';
        this.indTK = 0; this.displayTK1 = 'block'; this.displayTK2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'danhchoban') {
      this.colorTextDCB = 'black'; this.colorBackgroundDCB = 'white';
      this.indDCB++; this.displayTM2 = 'block'; this.displayTM1 = 'none';
      if (this.indDCB > 1) {
        this.colorTextDCB = ''; this.colorBackgroundDCB = '';
        this.indDCB = 0; this.displayTM1 = 'block'; this.displayTM2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indTK = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'vieclam') {
      this.colorTextVL = 'black'; this.colorBackgroundVL = 'white';
      this.indVL++; this.displayVL2 = 'block'; this.displayVL1 = 'none';
      if (this.indVL > 1) {
        this.displayVL1 = 'block'; this.displayVL2 = 'none';
        this.colorTextVL = ''; this.colorBackgroundVL = ''; this.indVL = 0;
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indTK = 0; this.indLH = 0;
    }
    if (index == 'lienhe') {
      this.colorTextLH = 'black'; this.colorBackgroundLH = 'white';
      this.indLH++; this.displayLH2 = 'block'; this.displayLH1 = 'none';
      if (this.indLH > 1) {
        this.colorTextLH = ''; this.colorBackgroundLH = ''; this.indLH = 0;
        this.displayLH1 = 'block'; this.displayLH2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indTK = 0;
    }
  }
  displayBCB = ''; displayHome = ''; displayCM1 = 'block'; displayCM2 = 'none';
  displayTI1 = 'block'; displayTI2 = 'none'; displayVL1 = 'block'; displayVL2 = 'none';
  displayTK1 = 'block'; displayTK2 = 'none'; displayTM1 = 'block'; displayTM2 = 'none';
  displayLH1 = 'block'; displayLH2 = 'none';
  paddingHome = 0;
  paddingBCB = 0;
  titleHome = '';
  titleBCB = '';
  fontw = '';
  size = 0;
  colorTextDanhMuc = ''; colorBackgroundDanhMuc = '';
  colorTextTienIch = ''; colorBackgroundTienIch = '';
  colorTextTimKiem = ''; colorBackgroundTimKiem = '';
  colorTextDCB = ''; colorBackgroundDCB = '';
  colorTextVL = ''; colorBackgroundVL = '';
  colorTextDN = ''; colorBackgroundDN = '';
  colorTextLH = ''; colorBackgroundLH = '';
  displayclose = ''; indDM = 0; indTI = 0; indTK = 0;
  indDCB = 0; indVL = 0; indLH = 0; indDN = 0;


  ngOnInit(): void {

  }
}
