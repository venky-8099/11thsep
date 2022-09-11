import { Component } from "@angular/core";

@Component({
  selector:'app-c1',
  templateUrl: './c1.component.html'
})


export class C1Component {
  i: number;
  constructor() {
    this.i = 10;
  }
}
