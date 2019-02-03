import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){ //return the array with data
    return  [
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
  }
}
