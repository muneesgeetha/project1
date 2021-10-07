import { Component,OnInit } from '@angular/core';
import { DayTemplateContext } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'

})
export class ListComponent implements OnInit {
  id=2;
  headerConfig : any = {heading: 'List',  isHeaderButton: true};
  tableConfig:any = { 
    actionItems: [{value:'view', view:'View'},{value:'edit', view:'Edit'}, {value:'delete', view:'Delete'}],
    headerMapping :[{value:'ID', view:'ID'},{value:'Name', view:'Name'},{value:'Age', view:'Age'}] ,
   shownColumns: ['id', 'name','age']};
   JsonData:any;
  constructor(private dataService:DataService) {
}
ngOnInit() {
console.log(this);
this.headerConfig={heading: 'List',  isHeaderButton: true};
this.dataService.getDatas('table.json').subscribe(data => {

  if(data){
    this.JsonData= data;
  }
});
  }

}