import { Component } from '@angular/core';
import { PositivePipe } from './testpipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numTabs: number[] = [2, 5, 6, 9, -10, 4, -7];
  title = 'secondTestProject';
  testPositiveNums(): number[] {
    // return this.numTabs|positiveNumbers;
    return this.numTabs;
  }
}
