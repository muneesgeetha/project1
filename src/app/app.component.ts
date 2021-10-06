import { Component,OnInit } from '@angular/core';
import { DataService } from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project1';
  JsonData:any;

  constructor(private dataService:DataService) {
   }
  ngOnInit() {
  
     }
     onChange(value) {
       console.log(value.value)
    //    this.dataService.getDatas().subscribe(data => {
    //      if(data){
    //        this.JsonData= data;
    //        console.log(this.JsonData);
    //      }
    //  });
       
     }
     onOutletLoaded(component) {
      component.someProperty = 
        [{
            "id" : "1",
            "name" : "Rahul",
            "age" : "21",
            "Gender" : "Male",
            "Country" : "India"
          },
          {
            "id" : "2",
            "name" : "Ajay",
            "age" : "25",
            "Gender" : "Male",
            "Country" : "India"
          },
          {
            "id" : "3",
            "name" : "Vikram",
            "age" : "31",
            "Gender" : "Male",
            "Country" : "Australia"
          },
          {
            "id" : "4",
            "name" : "Riya",
            "age" : "20",
            "Gender" : "Female",
            "Country" : "India"
          },
          {
            "id" : "5",
            "name" : "John",
            "age" : "23",
            "Gender" : "Male",
            "Country" : "USA"
          },
          {
            "id" : "6",
            "name" : "Raman",
            "age" : "27",
            "Gender" : "Male",
            "Country" : "India"
          },
          {
            "id" : "7",
            "name" : "Mohan",
            "age" : "39",
            "Gender" : "Male",
            "Country" : "India"
          },
          {
            "id" : "8",
            "name" : "Shreya",
            "age" : "21",
            "Gender" : "Female",
            "Country" : "India"
          }
          ]
      console.log(component);
  } 
}
