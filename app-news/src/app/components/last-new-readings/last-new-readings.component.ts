import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../body/page-body/body-center/body-center.component';
import { MenuComponent } from '../header/menu/menu.component';

@Component({
  selector: 'app-last-new-readings',
  templateUrl: './last-new-readings.component.html',
  styleUrls: ['./last-new-readings.component.scss']
})
@Injectable({ providedIn: 'root' })
export class LastNewReadingsComponent implements OnInit {
  data: any[] = [];
  @Input() dataItem: any[] = [];
  public dataLinkSearch: any[] = [];
  urlItem = '';
  display = 'none';
  keySearch = '';
  @Input() title: string = '';
  @Input() dataCM: any[];
  public keyword: string;
  constructor(private route: Router, private bodyCenter: BodyCenterComponent, private com: AppComponent, private menu: MenuComponent) {
    this.keyword = "";
    this.dataCM = this.menu.dataCM;
    const navigation = this.route.getCurrentNavigation();
    this.data = navigation?.extras.state as any[];
    this.urlItem = '';
    if (typeof this.data !== 'undefined') {
      if ((this.data.length == 1)) {
          this.search(this.data[0]);
          this.searchByIndex(this.data[0]);
          this.display = '';
      }
      if ((this.data.length == 2)) {
        this.display = 'none';
        var index = this.data[0];
        this.urlItem = this.dataLinkCM[index]['header'];
        this.bodyCenter.getDatas(this.urlItem, this.dataItem);
        this.title = this.data[1];
      }
      if ((this.data.length == 3)) {
        this.display = 'none';
        var index1 = this.data[0];
        var index2 = this.data[1];
        this.urlItem = this.dataLinkCM[index1]['data'][index2];
        this.bodyCenter.getDatas(this.urlItem, this.dataItem);
        this.title = this.data[2];
      }
    }
  }
  view(): void {
    this.dataLinkSearch = [];
    this.dataItem = [];
      this.search(this.keyword);
      this.searchByIndex(this.keyword);
      this.keyword = '';
  }
  a: String = "dsfjhfkds";
  searchByIndex(keyw: string): void{
    var i = 0;
    var j = 0;
      for(let item of this.dataCM){
        for(let key of item.data){
            if (keyw.trim().toLocaleLowerCase().match(key.trim().toLocaleLowerCase()) != null){
                var urlItem = this.dataLinkCM[i]['data'][j];
                this.bodyCenter.getDatas(urlItem, this.dataItem);
                this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
                break;
            }
            if (keyw.trim().toLocaleLowerCase().match(item['header'].trim().toLocaleLowerCase()) != null){
              var urlItem = this.dataLinkCM[i]['header'];
              this.bodyCenter.getDatas(urlItem, this.dataItem);
             for(let k = 0; k < item.data.length; k++){
              var urlItem = this.dataLinkCM[i]['data'][k];
              this.bodyCenter.getDatas(urlItem, this.dataItem);
             }
             this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
              break;
          }
            j++
        }
        j = 0;
        i++;
      }

  }
  search(keyw: string): void {
    this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '" không tìm thấy kết quả nào?';
    for (let index = 0; index < this.dataLinkCM.length; index++) {
      for (let j = 0; j < this.dataLinkCM[index]['data'].length; j++) {
        this.com.getData(this.dataLinkCM[index]['data'][j])
          .subscribe((value: any) => {
            for (let item of value['items']) {
              this.dataLinkSearch.push({ image: item['thumbnail'], title: item['title'],
                    time: this.bodyCenter.getTime(item['pubDate']), link: item['link'] });
              this.dataLinkSearch.filter((res: any) => {
                if (res['title'].toLocaleLowerCase().match(keyw.toLocaleLowerCase()) != null) {
                  this.dataItem.push({ image: res.image, title: res.title, time: res.time, link: res.link });
                  this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
                }
              });
              this.dataLinkSearch = [];
            }
          });
      }
    }
  }
   //  linh rss video
   private Video = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvideo.thanhnien.vn%2Frss%2Fhome.rss';
   private viThoiSu = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private phongSu = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fphong-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private videoGT = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fgiai-tri.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private monNgon = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fmon-ngon.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private viThethao = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fvideo-the-thao.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private viTheGioi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthe-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private trucTuyen = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Ftruc-tuyen.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   // link Thời sự
   private ThoiSu = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private chinhTri = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fchinh-tri.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private phapLuat = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fphap-luat.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private danSinh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fdan-sinh.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private ldvl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Flao-dong-viec-lam.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private qdb = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquyen-duoc-biet.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private psđt = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fphong-su-dieu-tra.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private quocphong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquoc-phong.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private vqCovid = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fvuot-qua-covid-19.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   // Thế giới
   private TheGioi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private kttg = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fkinh-te-the-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private quanSu = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fquan-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private gocNhin = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fgoc-nhin.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private hoSo = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fho-so.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private nvnc = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fnguoi-viet-nam-chau.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private chuyenLa = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fchuyen-la.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   // Văn hóa
   private VanHoa = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
   private ccvh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fcau-chuyen.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private khaoCuu = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fkhao-cuu.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private xemNghe = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fxem-nghe.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private haNoi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fha-noi-thanh-pho-toi-yeu.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private songDep = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fsong-dep.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private mnhn = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fmon-ngon-ha-noi.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   // Giải trí
   private GiaiTri = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private phim = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Fphim.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private truyenHinh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Ftruyen-hinh.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private đns = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Fdoi-nghe-si.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   // Thể thao
   private TheThao = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthethao.thanhnien.vn%2Frss%2Fhome.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private euro = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Feuro-2020.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private bđvn = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-da-viet-nam.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private vLeague = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fsoi-dong-cung-vleague.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private bđqt = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-da-quoc-te.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private chuyenNhuong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Ftin-chuyen-nhuong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private bongRo = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-ro.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private ttcđ = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fthe-thao-cong-dong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private khac = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Ftoan-canh-the-thao.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   // Đời sống
   private DoiSong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private nsqt = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fnguoi-song-quanh-ta.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private giaDinh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fgia-dinh.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private amThuc = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fam-thuc.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private congDong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fcong-dong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   private gsbc = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fguong-sang-bien-cuong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
   // Tài chính - Kinh doanh
   private TCKD = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private ktx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fkinh-te-xanh.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private cspt = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fkinh-doanh%2Fchinh-sach-phat-trien.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private nganHang = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fngan-hang.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private chungKhoan = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fchung-khoan.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private doanhNg = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdoanh-nghiep.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private doanhNh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdoanh-nhan.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private tieuDung = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Ftieu-dung.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private lamGiau = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Flam-giau.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private diaOc = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdia-oc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   // Giới trẻ
   private GioiTre = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private syac = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fsong-yeu-an-choi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private tgM = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fthe-gioi-mang.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private ketNoi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fket-noi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private doanHoi = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fdoan-hoi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   // Giáo dục
   private GiaoDuc = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private tuyenSinh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Ftuyen-sinh%2F2021.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private tuVan = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fhop-thu-tu-van-24-7.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private duHoc = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fdu-hoc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private chonNghe = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fchon-nghe.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private chonTruong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fchon-truong.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private nguoiThay = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fnguoi-thay.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private camNang = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fcam-nang-tuyen-sinh-2021.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   // Công nghệ
   private CongNghe = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private xuHuong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fxu-huong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private spM = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fsan-pham-moi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
   private kinhNgh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fkinh-nghiem.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private yTuong = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fy-tuong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private cđs = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fchuyen-doi-so.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   // Game
   private Game = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgame.thanhnien.vn%2Frss%2Fhome.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private eSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fesports.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private thuThuat = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fthu-thuat.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private phongM = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fgame%2Fphong-may.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private CnG = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fcong-nghe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private congĐ = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fcong-dong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private vd = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fvideo-game.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   // Sức khỏe
   private SucKhoe = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private lamDep = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Flam-dep.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private kđmn = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fkhoe-dep-moi-ngay.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private gioiTinh = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fgioi-tinh.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private songVk = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fsong-vui-khoe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   // DU lịch
   private DuLich = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private khamPha = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fkham-pha.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private az = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fa-z.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private sanTour = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fsan-tour.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   // Xe
   private Xe = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fxe.thanhnien.vn%2Frss%2Fhome.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private ttx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fthi-truong-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private tvx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Ftu-van-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private dđx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fdien-dan-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private đgx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fdanh-gia-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
   private kpx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fkham-pha.rss';
   private vdx = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fvideo-xe.rss';
 // data link rss các chuyên mục menu
 dataLinkCM: any[] = [
  { header: this.Video, data: [this.viThoiSu, this.phongSu, this.videoGT, this.monNgon, this.viThethao, this.viTheGioi, this.trucTuyen] },
  { header: this.ThoiSu, data: [this.chinhTri, this.phapLuat, this.danSinh, this.ldvl, this.qdb, this.psđt, this.quocphong, this.vqCovid] },
  { header: this.TheGioi, data: [this.kttg, this.quanSu, this.gocNhin, this.hoSo, this.nvnc, this.chuyenLa] },
  { header: this.VanHoa, data: [this.ccvh, this.khaoCuu, this.xemNghe, this.haNoi, this.songDep, this.mnhn] },
  { header: this.GiaiTri, data: [this.phim, this.truyenHinh, this.đns] },
  { header: this.TheThao, data: [this.euro, this.bđvn, this.vLeague, this.bđqt, this.chuyenNhuong, this.bongRo, this.ttcđ, this.khac] },
  { header: this.DoiSong, data: [this.nsqt, this.giaDinh, this.amThuc, this.congDong, this.gsbc] },
  { header: this.TCKD, data: [this.ktx, this.cspt, this.nganHang, this.chungKhoan, this.doanhNg, this.doanhNh, this.tieuDung, this.lamGiau, this.diaOc] },
  { header: this.GioiTre, data: [this.syac, this.tgM, this.ketNoi, this.doanHoi] },
  { header: this.GiaoDuc, data: [this.tuyenSinh, this.tuVan, this.duHoc, this.chonNghe, this.chonTruong, this.nguoiThay, this.camNang] },
  { header: this.CongNghe, data: [this.xuHuong, this.spM, this.kinhNgh, this.yTuong, this.cđs] },
  { header: this.Game, data: [this.eSport, this.thuThuat, this.phongM, this.CnG, this.congĐ, this.vd] },
  { header: this.SucKhoe, data: [this.lamDep, this.kđmn, this.gioiTinh, this.songVk] },
  { header: this.DuLich, data: [this.khamPha, this.az, this.sanTour] },
  { header: this.Xe, data: [this.ttx, this.tvx, this.dđx, this.đgx, this.kpx, this.vdx] },
];
  ngOnInit(): void {
  }

}
