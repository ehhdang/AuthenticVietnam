import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Ingredient } from "../../shared/Ingredient";

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IngredientDetailComponent implements OnInit {

  @Input() ingredients: Ingredient[];
  circle = faCircle;
  checkedCircle = faCheckCircle;
  checklist: Boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeChecklist();
  }

  onSelectIngredient(i: number): void {
    this.checklist[i] ? this.checklist[i]=false : this.checklist[i]=true;
  }

  initializeChecklist(): void {
    if (this.ingredients) {
      for (let i = 0; i < this.ingredients.length; i++) {
        this.checklist.push(false);
      }
    }
  }

}
