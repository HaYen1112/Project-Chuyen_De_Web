
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

  ];


  displayTE1: string = '';
  displayTE2: string = '';
  marginTopDHN: string = '12px';
  marginTopDHNU: string = '12px';
  marginTopDHTE: string = '12px';
  marginTopTK: string = '12px';
  marginTopGH: string = '12px';
  marginTopLH: string = '12px';
  colorTextDHN = '';
  border = '';
  colorTextDHNU = '';
  colorBackgroundDHNU = '';
  colorGH = 'white';
  colorLH = 'white';
  colorDN = 'white';
  colorTE = 'white';
  colorNam = 'white';
  colorNu = 'white';

  constructor(private menu: AppComponent, private router: Router) {
    this.dataTM = [];
    this.setDataTM(this.urlNew);
    this.colorTextDN = '';
    this.colorBackgroundDN = '';
    this.keyword = '';
    this.colorTextDHN = '';
    this.border = '';
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
    this.displayTE1 = 'block'; this.displayTE2 = 'none';

    this.marginTopDHN = '12px'; this.marginTopDHNU = '12px'; this.marginTopDHTE = '12px';
    this.marginTopTK = '12px'; this.marginTopGH = '12px'; this.marginTopLH = '12px';
    if (index == 'nam' && this.router.url == '/imforProduct/man' ) {
      this.colorNam = 'black';
      this.colorTE = 'white';
      this.colorNu = 'white';
    }
    if (index == 'nu' && this.router.url == '/imforProduct/woman' ) {
      this.colorNu = 'black';
      this.colorNam = 'white';
      this.colorTE = 'white';
    }
    if (index == 'treem' && this.router.url == '/imforProduct/kid' ) {
      this.colorTE = 'black';
      this.colorNam = 'white';
      this.colorNu = 'white';
    }

    if (index == 'timkiem') {
      this.colorTextTimKiem = 'black';
      this.indTK++; this.displayTK2 = 'block'; this.displayTK1 = 'none';
      this.marginTopTK = '2px';
      if (this.indTK > 1) {
        this.colorTextTimKiem = ''; this.colorBackgroundTimKiem = '';
        this.indTK = 0; this.displayTK1 = 'block'; this.displayTK2 = 'none';
        this.marginTopTK = '12px';
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'lienhe') {
      this.colorTextLH = 'black';
      this.indLH++; this.displayLH2 = 'block'; this.displayLH1 = 'none';
      this.marginTopLH = '2px';
      if (this.indLH > 1) {
        this.colorTextLH = ''; this.colorBackgroundLH = ''; this.indLH = 0;
        this.displayLH1 = 'block'; this.displayLH2 = 'none';
        this.marginTopLH = '12px';
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
  colorBackgroundDHN = '';
  displayclose = ''; indDM = 0; indTI = 0; indTK = 0;
  indDCB = 0; indVL = 0; indLH = 0; indDN = 0;


  ngOnInit(): void {

  }
}
