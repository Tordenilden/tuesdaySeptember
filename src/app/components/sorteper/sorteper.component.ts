import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteper',
  standalone: true,
  imports: [],
  templateUrl: './sorteper.component.html',
  styleUrl: './sorteper.component.scss'
})
export class SorteperComponent {

  // variables
  //int tal = 0;
  tal2: number = 45655; // Definition
  tal3=55;
  tekst : string = "Hej med dig";
  choice: boolean = false;
  // null, undefined, boolean, number, string, object

  // methods
  public clickMe() {}
  start(){
    console.log("blablablabla");
  }
  /* Method Definition - signature er linje 25*/
  start2(str: string){
    console.log("Mikkels metode" ,str);
  }
  // constructor

  // lifecycle hooks - Michael!! onInit, onDestroy, etc.
}
