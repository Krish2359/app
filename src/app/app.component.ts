import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  num1: string = "";
  num2: string = "";
  result1: any;
  result2: any;
  result3: any;
  result4: any;

  add() {
    this.result1 = parseInt(this.num1) + parseInt(this.num2);
  }
  sub() {
    this.result2 = parseInt(this.num1) - parseInt(this.num2);
  }
  mul() {
    this.result3 = parseInt(this.num1) * parseInt(this.num2);
  }
  div() {
    this.result4 = parseInt(this.num1) / parseInt(this.num2);
  }
}

