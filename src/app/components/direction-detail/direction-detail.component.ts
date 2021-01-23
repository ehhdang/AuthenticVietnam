import { Component, Input, OnInit } from '@angular/core';
import { Direction } from "../../shared/Direction";

@Component({
  selector: 'app-direction-detail',
  templateUrl: './direction-detail.component.html',
  styleUrls: ['./direction-detail.component.css']
})
export class DirectionDetailComponent implements OnInit {

  @Input() directions: Direction[];
  selectedStep: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectStep(direction: Direction): void {
    this.selectedStep = this.directions.indexOf(direction);
  }
}
