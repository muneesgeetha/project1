import { NgSelectComponent } from '@ng-select/ng-select';
// import {HtmlEditorComponent} from '../html-editor/html-editor-component';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    Input,
    Renderer2
 } from '@angular/core';
 import {
     ControlContainer,
     Form,
     FormControl,
     FormGroup,
     NgForm
 } from '@angular/forms'
 import {MatFormFieldControl} from '@angular/material/form-field';
 import { Observable ,of } from 'rxjs';
 import { flatMap ,startWith } from 'rxjs/operators';
 import { MatInput } from '@angular/material/input';
 @Component({
    selector: 'aamc-ui-extended-field',
    templateUrl: './extended-field.component.html'
  
  })
  export class ExtendedFieldComponent implements AfterViewInit{

    @Input() label:string = '';
    @Input() hint:string ='';
    @Input() errors:unknown = {};
    @Input() fieldFormControl:string = '';
    @Input() requiredMarker:boolean = false;
    @Input() showRemainingCount:boolean = false;
    @Input() maxLimit: number = 0;
    @Input() parentForm?:NgForm;

  @ContentChild(MatFormFieldControl,{static: true})
  matFormControl:MatFormFieldControl<unknown>;

@ContentChild(MatInput,{static: true,read:ElementRef})
inputElement:ElementRef

// @ContentChild(HtmlEditorComponent,{static:true})
// uiEditor:HtmlEditorComponent

@ContentChild(NgSelectComponent,{static:true})
ngSelectRefs:NgSelectComponent


public control: FormControl;
public form:Form;

public error$:Observable<string>;
count:number = 0;

constructor(
  private controlContainer:ControlContainer,
  private cd:ChangeDetectorRef,
  private render:Renderer2
){

}

    ngAfterViewInit(){
      if(this.inputElement){
        this.render.setAttribute(
          this.inputElement.nativeElement,
         'aria-describedby',
         this.fieldFormControl
        );
      }
      const FormGroup=<FormGroup>this.controlContainer.control;
      this.form=<Form>this.controlContainer.formDirective;
      this.control=<FormControl>FormGroup.controls[this.fieldFormControl];
      if(this.showRemainingCount){
        if(this.control.value){
          this.count= this.control.value ? this.control.value.length : 0;

        }
      }
       this.error$= this.control.statusChanges.pipe(
       
         startWith(this.control.status),
         flatMap((status,index) =>{
           let error ='';
           Object.keys(this.errors||{}).some((key)=>{
             if(this.control.errors && this.control.errors[key]){
              error=this.errors[key];
              return true;
             }
           });
           return of(error);
         })
         );
         if(this.showRemainingCount){
           this.control.valueChanges.subscribe((e) =>{
             if(this.control){
              this.count= this.control.value ? this.control.value.length : 0;
             }
           });
         }
       this.cd.detectChanges();
    }
    public showError():boolean{
      if(this.ngSelectRefs && this.parentForm.submitted){
        if(this.ngSelectRefs.element.classList.contains('ng-invalid')){
          this.ngSelectRefs.element.classList.add('show-error');
        }else{
          this.ngSelectRefs.element.classList.remove('show-error');
        }
        return this.ngSelectRefs.element.classList.contains('ng-invalid');
      }
      if(this.matFormControl){
        return this.matFormControl.errorState;
      }
      // if(this.uiEditor){
      //   if(this.control){
      //     return(
      //       this.uiEditor.throwError || this.control.touched || this.control.dirty
      //     );
      //   }else{
      //     this.uiEditor.throwError;
      //   }
      // }
      if(this.control){
        return this.control.touched || this.control.dirty;
      }
      return true;
    }
    getuiEditorShowChar():boolean {
      // if(this.uiEditor){
      //   return !this.uiEditor.hideRemainingChar;
      // }else{
      //   return false;
      // }
    return false
    }

  }