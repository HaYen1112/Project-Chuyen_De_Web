import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.scss']
})
export class BodyLeftComponent implements OnInit {
  @Input() dataTitle: any[];
  @Input() dataImg: any[];
  @Input() dataDate: any[];

  index = 0;
  private data: any[];
  private datas: any[];
  private url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fsan-pham-moi.rss';

    constructor(private component: AppComponent) {
      this.data=[];
      this.dataDate = [];
      this.dataImg = [];
      this.dataTitle = [];
      this.datas=[];
      this.component.getData(this.url)
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.index++;
          if (this.index == 3){
            this.data.push(v);
            for (const [s, x] of Object.entries(this.data[0]))
                  this.datas.push(x);
              for (const [s, x] of Object.entries(this.datas)){
                    this.dataImg.push(x['thumbnail']);
              }
            }
           }
      });
     }
  ngOnInit(): void {
  }

}
