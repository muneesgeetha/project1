import { Component,OnInit } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sample-form',
    templateUrl: './sample-form.component.html'
  
  })
  export class SampleFormComponent implements OnInit {
    sampleForm: FormGroup;
    id=3;
    desiginations=[
      {
        'desiginationCode':1,
        'displayName':'Junior software Engineer' 
      },
      {
        'desiginationCode':2,
        'displayName':'senior software Engineer' 
      },
      {
        'desiginationCode':3,
        'displayName':'Network Engineer' 
      },
      {
        'desiginationCode':4,
        'displayName':'Graphic design Engineer' 
      }
    ]
    setupErrorConstants={'INST_NAME':''};
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        console.log(this);
        this.sampleForm = this.fb.group({
            name: ['', Validators.required],
            desigination: ['', Validators.required],
            Age: ['', Validators.required]
        //    mobileNo: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          });
    }
    onSubmit(){
      console.log(this.sampleForm.value)
    }

  }
