import { Component } from '@angular/core';
import { Samurai } from '../../../models/Samurai';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-samurai',
  standalone: true,
  imports: [],
  templateUrl: './samurai.component.html',
  styleUrl: './samurai.component.scss'
})

/* Hvad skal jeg huske??*/
export class SamuraiComponent {

  // list af samurais:
  samurais:Samurai[] = [
    {id: 1, name: 'Kenshin Himura', description: 'Battousai', age: 28},
    {id: 2, name: 'Kenshin Himura', description: 'slow', age: 44},
    {id: 3, name: 'Kenshin Himura', description: 'not handy', age: 19}
  ];

constructor(private service: ServerService) { //dependency injection / field

}

  ngOnInit(){
    //console.log(this.samurais);
    // console.log(this.getAll());
    // console.log(this.getById(2));

    //CALL getall from service....
    console.log(this.service.getAll());
    this.service.create({id: 4, name: 'Kenshin Himura',
    description: 'not handy', age: 19});

    // final code will be an obj of FormControl etc.
    // this.service.create(this.formGroup.value[0]);

    //3) - API
    this.service.getAll().subscribe(data =>
      {
        console.log(data);
      });

  }
  delete():boolean{return true;
  //use filter method!!
  }
  getAll():Samurai[]{return this.samurais;} //#lærkevej 5
  getById(samuraiId:number){
    return this.samurais.find(samurai => samurai.id === samuraiId);
  }
  create(samuObj:Samurai){
    this.samurais.push(samuObj);
  }
}
