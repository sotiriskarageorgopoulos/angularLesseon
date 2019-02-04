import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})



export class RecordsService {

  constructor(private http:HttpClient) { }

  getData(){ //return the data which contains db.json 
    return  this.http.get('http://localhost:3000/person')
  }
}
