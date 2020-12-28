import { Component } from '@angular/core';
import { StepsService } from './services/steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper-app';
  constructor() {}
}
