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

  constructor() {
    this.myDisabled
    this.myVariable
  }

  callMyFunc() {
    console.log("Called Succesfully!!!")
    this.myDisabled = !this.myDisabled
  }
}
