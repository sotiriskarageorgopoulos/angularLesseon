import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }
 
  name = "Sotiris"
  bitwiseOr = 2 | 5 // 010 | 101 => 0|1 => 1 , 1|0 => 1, 0|1 => 1 => 111 = 7

  ngOnInit() {
  }

}
