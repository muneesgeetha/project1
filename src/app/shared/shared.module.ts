import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonTableModule} from './commonTable/commonTable.module'


@NgModule({
  imports: [
    CommonModule,
    CommonTableModule,
    RouterModule
  ],
  declarations: [],
  exports:[]
})
export class SharedModule { }
