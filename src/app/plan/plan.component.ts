import { Component, OnInit } from '@angular/core';
import { TrqIconShape, TrqIconSize } from '@torque/ui';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  iconShape = TrqIconShape;
  iconSize = TrqIconSize;

  constructor() { }

  ngOnInit() {
  }

}
