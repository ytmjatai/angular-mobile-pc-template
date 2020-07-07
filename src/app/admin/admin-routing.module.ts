import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    // canLoad: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'rate',
        loadChildren: () => import('./../modules/rate/rate.module').then(m => m.RateModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./../modules/docs/docs.module').then(m => m.DocsModule)
      },
      {
        path: 'deal',
        loadChildren: () => import('./../modules/deal/deal.module').then(m => m.DealModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./../modules/history/history.module').then(m => m.HistoryModule)
      },
      { path: '', redirectTo: 'history', pathMatch: 'full' }
    ]
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
