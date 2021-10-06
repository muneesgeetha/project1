import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashborad.module').then(x => x.DashboardModule) },
  {path:'list',component:ListComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
