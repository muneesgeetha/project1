import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashborad.module').then(x => x.DashboardModule) },
  {path:'list',loadChildren: () => import('./list/list.module').then(x => x.ListModule)},
  {path:'sampleform',loadChildren: () => import('./form/sample-form.module').then(x => x.SampleFormModule)},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
