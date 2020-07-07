import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';


const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m =>m.LoginModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'rate',
        loadChildren: () => import('./modules/rate/rate.module').then(m => m.RateModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./modules/docs/docs.module').then(m => m.DocsModule)
      },
      {
        path: 'deal',
        loadChildren: () => import('./modules/deal/deal.module').then(m => m.DealModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule)
      },
      { path: '', redirectTo: 'rate', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
