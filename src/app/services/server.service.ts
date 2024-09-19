import { Injectable } from '@angular/core';
import { Samurai } from '../../models/Samurai';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// httpOptions = {}

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  // 1)
  samurais:Samurai[] = [
    {id: 1, name: 'Kenshin Himura', description: 'Battousai', age: 28},
    {id: 2, name: 'Kenshin Himura', description: 'slow', age: 44},
    {id: 3, name: 'Kenshin Himura', description: 'not handy', age: 19}
  ];
  constructor(private http:HttpClient) { }
  // 1)
  //getAll():Samurai[]{return this.samurais;}
  create(samuObj:Samurai){
    //this.samurais.push(samuObj);
  }
  // 2) - http, Observable
  getAll():Observable<Samurai[]>{
    return this.http.get<Samurai[]>('https://localhost:7129/api/Samurai');
  }
}//this.http.get<Samurai[]>('https://localhost:44321/api/samurais');
