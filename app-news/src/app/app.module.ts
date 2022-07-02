import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MenuBottomComponent } from './components/header/menu-bottom/menu-bottom.component';
import { PageBodyComponent } from './components/body/page-body/page-body.component';
import { BodyLeftComponent } from './components/body/page-body/body-left/body-left.component';
import { BodyCenterComponent } from './components/body/page-body/body-center/body-center.component';
import { BodyRightComponent } from './components/body/page-body/body-right/body-right.component';
import { AdvertisementComponent } from './components/body/page-body/body-center/advertisement/advertisement.component';
import { UnderTheAdComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad.component';
import { UnderTheAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/under-the-ad-left.component';
import { UnderTheAdRightComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-right/under-the-ad-right.component';
import { WordsAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/words-ad-left/words-ad-left.component';
import { ImgAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/img-ad-left/img-ad-left.component';
import { TabsComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-right/tabs/tabs.component';
import { FeatureComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/feature/feature.component';
import { NewsComponent } from './components/body/page-body/body-center/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechNewsComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/tech-news/tech-news.component';
import { LastNewReadingsComponent } from './components/last-new-readings/last-new-readings.component';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { YouNeedKnowComponent } from './components/you-need-know/you-need-know.component';
import { UnderLeftComponent } from './components/you-need-know/under-left/under-left.component';
import { UnderRightComponent } from './components/you-need-know/under-right/under-right.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { CateListComponent } from './components/you-need-know/under-left/cate-list/cate-list.component';
import { HotNewComponent } from './components/you-need-know/under-left/hot-new/hot-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


const route: Routes = [
  { path: 'search', component: LastNewReadingsComponent },
  { path: '', component: PageBodyComponent},
  { path: 'bancanbiet', component: YouNeedKnowComponent},
  { path: 'dangnhap', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBottomComponent,
    PageBodyComponent,
    BodyLeftComponent,
    BodyCenterComponent,
    BodyRightComponent,
    AdvertisementComponent,
    UnderTheAdComponent,
    UnderTheAdLeftComponent,
    UnderTheAdRightComponent,
    WordsAdLeftComponent,
    ImgAdLeftComponent,
    TabsComponent,
    FeatureComponent,
    NewsComponent,
    FooterComponent,
    TechNewsComponent,
    LastNewReadingsComponent,
    YouNeedKnowComponent,
    UnderLeftComponent,
    UnderRightComponent,
    LoginComponent,
    FormLoginComponent,
    CateListComponent,
    HotNewComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule,
     RouterModule.forRoot(route), HttpClientJsonpModule, NgbModule, BrowserAnimationsModule, FormsModule

  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent],
  exports: [HttpClientModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

