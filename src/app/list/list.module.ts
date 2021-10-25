import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CommonTableModule } from '../shared/commonTable/commonTable.module';
import { TestTableModule } from '../shared/table/Table.module';
const routes: Routes = [{ path: '', component: ListComponent}];

@NgModule({
  imports: [
    CommonModule,
    CommonTableModule ,
    TestTableModule,
    RouterModule.forChild(routes)
  ],
 
  declarations: [ListComponent]
})
export class ListModule { }