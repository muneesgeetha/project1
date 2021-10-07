import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

    JsonData: any;
    id=1;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private dataService:DataService) { 
  }

 ngOnInit() {
       this.dataService.getDatas('1.json').subscribe(data => {
         if(data){
           this.JsonData= data;
           console.log(this.JsonData);
         }
     });
 }

  
}
