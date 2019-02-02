import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'intro2angular';
   myDisabled = false
   myVariable = "app"
   constructor(){
     setInterval(()=>{
     this.myVariable = Math.random().toString()
     this.myDisabled = Math.random() < 0.5
     },500)
   }

}
