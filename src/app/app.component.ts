import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';
 
  data = [
  {
    name:"Sotiris",
    online:true
  },
  {
    name:"George",
    online:false
  }
  ,
  {
    name:"Natassa",
    online:true
  }
]
  constructor() {
    
  }

}
