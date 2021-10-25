import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonTableModule} from './commonTable/commonTable.module'
import { TestTableModule } from './table/Table.module';

@NgModule({
  imports: [
    CommonModule,
    TestTableModule ,
    CommonTableModule,
    RouterModule
  ],
  declarations: [],
  exports:[]
})
export class SharedModule { }
