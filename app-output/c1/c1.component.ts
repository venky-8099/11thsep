import { Component } from "@angular/core";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html'
})

export class C1Component {
  j: number;
  constructor() {
  }
  catchValue(data: number) {
    console.log('data', data);
    this.j = data;
  }
}
