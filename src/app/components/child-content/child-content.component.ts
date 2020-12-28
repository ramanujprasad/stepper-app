import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit {
  @Input() step: any;
  @Input() element: any;
  constructor() {}

  ngOnInit(): void {}
}
