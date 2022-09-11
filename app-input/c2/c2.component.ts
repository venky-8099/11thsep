import { Component, Input } from "@angular/core";

@Component({
  selector:'app-c2',
  templateUrl:'./c2.component.html'
})

export class C2Component {

  @Input() j: number;
  constructor() {

  }
}
