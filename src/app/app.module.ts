import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CardComponent } from './components/card/card.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { PageStoreComponent } from './pages/page-store/page-store.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PageConnectComponent,
    PageNotFoundComponent,
    PageHomeComponent,
    CardComponent,
    CarousselComponent,
    PageSubscribeComponent,
    PageInfosComponent,
    StoreListComponent,
    PageStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
