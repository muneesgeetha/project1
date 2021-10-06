import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
  headerConfig : any = {heading: 'List',  isHeaderButton: true};
  tableConfig:any = { 
    actionItems: [{value:'view', view:'View'},{value:'edit', view:'Edit'}, {value:'delete', view:'Delete'}],
    headerMapping :[{value:'ID', view:'ID'},{value:'Name', view:'Name'},{value:'Age', view:'Age'}] ,
   shownColumns: ['id', 'name','age']};
    JsonData:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private dataService:DataService) { }

 ngOnInit() {
   this.headerConfig={heading: 'List',  isHeaderButton: true};
this.getTabeleDatas();
 }
 getTabeleDatas() {
   this.dataService.getTabeleDatas().subscribe(data => {
     if(data){
       this.JsonData= data;
     }
     
 });
}
  
}
