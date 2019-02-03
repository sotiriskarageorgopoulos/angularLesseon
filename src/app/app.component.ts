import { Component } from '@angular/core';
import { RecordsService } from './services/records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'intro2angular';

  records = {} //create an object of records

  constructor(private myService:RecordsService) {}//create an object of RecordsService
  
 
  ngOnInit()
  {
     this.myService.getData().subscribe(data => { //subscribe is used to store data on object records, through getData()
      this.records = data
    }) 
  }
}
