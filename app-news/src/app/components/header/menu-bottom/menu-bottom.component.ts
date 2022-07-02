import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {
  @Input() dataCMMB: any[];
  getDisplay(title:String){
    if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021') || (title == 'VƯỢT QUA COVID-19')) return 'block';
    return 'none';
  }
  constructor(private menubottom: MenuComponent, private router: Router) {
       this.dataCMMB = this.menubottom.dataCM;
   }
   navigationExtras?: NavigationExtras;
   view2(index1: number, index2: number, title: string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [index1, index2, title];
      this.navigationExtras = {state: index};
      this.router.navigateByUrl('/search', this.navigationExtras);
    });
  }
  view1(index1: number, title: string): void {
    this.router.navigate(['/']).then(() => {
    const index: any[] = [index1, title];
    this.navigationExtras = {state: index};
    this.router.navigateByUrl('/search', this.navigationExtras);
  });
  }
  ngOnInit(): void {
  }

}


