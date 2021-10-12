


import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExtendedFieldComponent } from './extended-field.component';
import {ReactiveFormsModule} from '@angular/forms';

const dependancies=[ReactiveFormsModule,MatFormFieldModule]
@NgModule({
  imports: [
    CommonModule,
...dependancies
  ],
  exports: [ExtendedFieldComponent,...dependancies],


  declarations: [ExtendedFieldComponent]
})
export class ExtendedFieldModule { }