import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { Ingredient } from '../shared/Ingredient';
import { Direction } from '../shared/Direction';

import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipesService.getRecipes()
      .subscribe(recipes => { this.recipes = recipes });
  }

}
