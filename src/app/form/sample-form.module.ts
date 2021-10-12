import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SampleFormComponent } from './sample-form.comonent';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ExtendedFieldModule } from '../extended-field/extended-field.module';
const routes: Routes = [{ path: '', component:SampleFormComponent}];

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
   ExtendedFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
 
  providers:[ FormsModule,ReactiveFormsModule],
  declarations: [SampleFormComponent]
})
export class SampleFormModule { }