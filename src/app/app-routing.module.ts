import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'info', component: PageInfosComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'login', component: PageConnectComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'subscribe', component: PageSubscribeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // le défilement est autorisé dans la configuration de routage:
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
