import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CommonTableModule } from '../shared/commonTable/commonTable.module';
const routes: Routes = [{ path: '', component: DashboardComponent}];

@NgModule({
  imports: [
    CommonModule,
    CommonTableModule ,
    RouterModule.forChild(routes)
  ],
 
  declarations: [ DashboardComponent]
})
export class DashboardModule { }