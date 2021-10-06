import { FormGroup, FormGroupDirective, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef, Input, SimpleChanges, Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commonTable',
  templateUrl: './commonTable.component.html',
  styleUrls: ['./commonTable.component.scss']
  
})
export class CommonTableComponent implements OnInit, OnChanges {

  MasterData: any[];
  count: number;
  keys: any[];
  sortType: boolean = false;
  RowCountOptions: string[]=['5','10','20','30']
  RowCount: number = 5; //no of rows to be displayed in table
  TableData: any; //to be binded with table for rows

  @Input() JsonData: any[];
  @Input() headerConfig:any = {};
  @Input() tableConfig: any ={};

  // @Output() headerButtonEvent = new EventEmitter();
  // @Output() actionItemsEvent = new EventEmitter();



  constructor(private fb: FormBuilder, private cref: ChangeDetectorRef) { }

  ngOnChanges() {
   // this.tableConfig.shownColumns=this.shownColumns;
    if(this.JsonData){
      this.MasterData = JSON.parse(JSON.stringify(this.JsonData))
      this.count = Object.keys(this.JsonData).length;
      if(this.count){
        this.keys = Object.keys(this.JsonData[0]);
        this.keys = Object.keys(this.JsonData[0]).filter(item => {
  
     return this.tableConfig.shownColumns.indexOf(item) >= 0;
        })
      }
      console.log(this.keys);
    }
  


  }

  ngOnInit(): void {

   // console.log(this.tableConfig);
  }


  actionClick(type, userid){
    //this.actionItemsEvent.emit({type, userid})
  }

itemevent(value,data){
console.log(value);
console.log(data);
}
  ngAfterViewInit() {
  }

  setTableData(data: any) {
    this.TableData = data;
    console.log(this.TableData);
    this.cref.detectChanges();
  }

  sortTable(header) {
    this.sortType = !this.sortType;
    if (this.sortType) {
      this.JsonData = [...this.JsonData.sort((a, b) => {
        if (a[header] > b[header])
          return 1;
        else if (a[header] < b[header])
          return -1;
        return 0;
      })];

    }
    else {
      this.JsonData = [...this.JsonData.sort((a, b) => {
        if (a[header] < b[header])
          return 1;
        else if (a[header] > b[header])
          return -1;
        return 0;
      })];
    }
  }

  searchText(text) {
    this.JsonData = JSON.parse(JSON.stringify(this.MasterData));

    if (text.trim()) {
      this.JsonData = this.JsonData.filter(x => {
        return (JSON.stringify(x).toLowerCase().indexOf(text) > 0);
      })
    }
  }

  onInput(val) {
    if (!val.trim()) {
      this.searchText(val);
    }
  }

  mapHeaders(header: string) {
   // console.log( this.tableConfig.headerMapping.find(x=> x.value == header)?.view?? header);
    return this.tableConfig.headerMapping.find(x=> x.value == header)?.view?? header;
  }


}