
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteTablePaginationModule } from 'absolute-table-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonTableComponent } from './commonTable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AbsoluteTablePaginationModule
  ],
  declarations: [CommonTableComponent],
  exports:[CommonTableComponent]
})
export class CommonTableModule { }
