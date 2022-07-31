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
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/login/signup/signup.component';
import { FormSignupComponent } from './components/login/signup/form-signup/form-signup.component';
import { Single_detailComponent } from './components/single_detail/single_detail.component';
import { Products_nam_nu_treemComponent } from './components/products_nam_nu_treem/products_nam_nu_treem.component';
import { ProductComponent } from './components/products_nam_nu_treem/product/product.component';
import { Shopping_cartComponent } from './components/shopping_cart/shopping_cart.component';
import { Cart1Component } from './components/shopping_cart/cart1/cart1.component';
import { AdminPageComponent } from './components/admin_page/admin-page.component';
import { AdminProductComponent } from './components/admin_page/admin-product/admin-product.component';
import { AdminMenuComponent } from './components/admin_page/admin-menu/admin-menu.component';
import { AdminEditProductComponent } from './components/admin_page/admin-edit-product/admin-edit-product.component';
import { AdminAddProductComponent } from './components/admin_page/admin-add-product/admin-add-product.component';
import { AdminHomeComponent } from './components/admin_page/admin-home/admin-home.component';
import { AdminAcountComponent } from './components/admin_page/admin-acount/admin-acount.component';


const route: Routes = [
  { path: 'search', component: LastNewReadingsComponent },
  { path: '', component: PageBodyComponent},
  { path: 'imforProduct', component: Products_nam_nu_treemComponent},
  { path: 'dangnhap', component: LoginComponent},
  { path: 'dangky', component: SignupComponent},
  { path: 'singledetail', component: Single_detailComponent},
  { path: 'shoppingcart', component: Shopping_cartComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'admin/product', component: AdminProductComponent},
  { path: 'admin/product/add', component: AdminAddProductComponent},
  { path: 'admin/product/edit', component: AdminEditProductComponent},
  { path: 'admin/account', component: AdminAcountComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    Shopping_cartComponent,
    Cart1Component,
    ProductComponent,
    Products_nam_nu_treemComponent,
    MenuComponent,
    Single_detailComponent,
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
    LoginComponent,
    FormLoginComponent,
    SignupComponent,
    FormSignupComponent,
    AdminPageComponent,
    AdminProductComponent,
    AdminMenuComponent,
    AdminEditProductComponent,
    AdminAddProductComponent,
    AdminHomeComponent,
    AdminAcountComponent,

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

