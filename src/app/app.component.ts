import { Component } from '@angular/core';
import { RecordsService } from './services/records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';

  records = {} //create an array of records

  constructor(private myService:RecordsService) { //create an object of RecordsService
    this.records = this.myService.getData() //store the data to records
  }

}
