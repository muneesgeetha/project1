import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project1';
  JsonData:any;
  selectedValue:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dataService:DataService) {
   }
  ngOnInit() {
     }
    
     onChange(value) {
      //this.router.navigate(['/dashboard', value.value]);
      this.selectedValue=value.value;
      if(value.value == 1){
        this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute });
      }
      else if(value.value == 2){
        this.router.navigate(['/list'], { relativeTo: this.activatedRoute });
      }else if(value.value == 3){
        this.router.navigate(['/sampleform'], { relativeTo: this.activatedRoute });
      }
     }
     onOutletLoaded(component) {
       console.log(component.id)
   this.selectedValue=component.id;
  //  if(component.id == 1){
  //   this.dataService.getDatas('1.json').subscribe(data => {
  //     if(data){
  //       component.JsonData= data;
  //     }
  // });
  //  }
  } 

}
