import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnectComponent } from './pages/page-connect/page-connect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageSubscribeComponent } from './pages/page-subscribe/page-subscribe.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthGuardService } from './services/auth-guard.service';
import { PageStoreComponent } from './pages/page-store/page-store.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';
import { PageAddStoreComponent } from './pages/page-add-store/page-add-store.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreEditComponent } from './components/store-edit/store-edit.component';
import { AdminGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'login', component: PageConnectComponent },
  { path: "store", component: PageStoreComponent, canActivate: [AuthGuard] },
  { path: "store/:categoryId", component: PageStoreComponent, canActivate: [AuthGuard] },
  { path: 'store/detail/:id', component: StoreDetailComponent, canActivate: [AuthGuard] },
  { path: 'store-edit/:id', component: StoreEditComponent, canActivate: [AuthGuard] },
  { path: "add-store", component: PageAddStoreComponent, canActivate: [AuthGuard] },
  { path: 'subscribe', component: PageSubscribeComponent },
  { path: 'admin', component: PageAdminComponent, canActivate: [AuthGuard,AdminGuard] },//je combine les deux guards
  { path: 'info', component: PageInfosComponent },
  {
    path: 'submit',
    component: PageAddStoreComponent,
    canActivate: [AuthGuard],
  },
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