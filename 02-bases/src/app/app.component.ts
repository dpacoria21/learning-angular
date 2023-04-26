import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

  // degreeBy(): void {
  //   this.counter--;
  // }

}
