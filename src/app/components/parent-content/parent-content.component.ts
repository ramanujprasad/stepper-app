import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-parent-content',
  templateUrl: './parent-content.component.html',
  styleUrls: ['./parent-content.component.scss']
})
export class ParentContentComponent implements OnInit {
  stepsArr: any;
  currentStep: number = 0;

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.stepsService.getSteps().subscribe(data => {
      this.stepsArr = data;
    });
  }

  next(i: number) {
    this.currentStep = this.currentStep + 1;
  }
  back(i: number) {
    this.currentStep = this.currentStep - 1;
  }
}
