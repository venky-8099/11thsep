import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'app-c2',
  templateUrl:'./c2.component.html'
})

export class C2Component {

  j:number;
  @Output() sendData = new EventEmitter<number>();
  constructor() {
    this.j = 30;
  }

  sendJValue(){
    console.log('in emited val')
    this.sendData.emit(this.j);
  }
}
