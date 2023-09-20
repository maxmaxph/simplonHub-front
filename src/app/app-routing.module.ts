import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';
import { PageStoreComponent } from './pages/page-store/page-store.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'login', component: PageConnectComponent },
  { path: 'subscribe', component: PageSubscribeComponent },
  { path: 'store', component: PageStoreComponent, canActivate: [AuthGuard] },
  { path: 'info', component: PageInfosComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // le défilement est autorisé dans la configuration de routage:
    }),
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
