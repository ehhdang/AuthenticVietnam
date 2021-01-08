import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { Direction } from '../shared/Direction';
import { Ingredient } from '../shared/Ingredient';
import { faCheckCircle, faChevronLeft, faList, faHeart as sfaHeart} from '@fortawesome/free-solid-svg-icons';
import { faCircle, faHeart as rfaHeart } from '@fortawesome/free-regular-svg-icons';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipesService } from '../services/recipes.service';
import { Popover } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit {

  recipe: Recipe;
  selectedStep: number = 0;
  checklist: Map<Ingredient, boolean> = new Map();
  isFavorite: boolean = false;

  // Fontawesome icon
  circle = faCircle;
  checkedCircle = faCheckCircle;
  backArrow = faChevronLeft;
  rHeart = rfaHeart;
  sHeart = sfaHeart;
  comment = faList;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    this.initializeChecklist();
  }

  ngAfterViewInit(): void {
    this.enableBootstrapPopover();
  }

  onSelectStep(direction: Direction): void {
    this.selectedStep = this.recipe.directions.indexOf(direction);
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id)
      .subscribe(recipe => { this.recipe = recipe });
  }

  onSelectIngredient(ingredient: Ingredient): void {
    console.log(ingredient);
    let checked = this.checklist.get(ingredient);
    checked ? this.checklist.set(ingredient, false) : this.checklist.set(ingredient, true);
    console.log(this.checklist.get(ingredient));
  }

  initializeChecklist(): void {
    if (this.recipe) {
      for (let ingredient of this.recipe.ingredients) {
        this.checklist.set(ingredient, false);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  // toggleFavorite(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (this.isFavorite) {
  //     // if the dish is a favorite, then remove it from the favorite list
  //     this.recipesService.removeFavorite(id);
  //     this.isFavorite = false;
  //   } else {
  //     // if the dish is not a favorite, then add it to the favorite list
  //     this.recipesService.addFavorite(id);
  //     this.isFavorite = true;
  //   }
  // }

  // toggleIngredientInfo(ingredient: Ingredient): void {
  //   const id: string = Number(ingredient.id).toString();
  //   const ingredientInfo = document.getElementById(id);
  //   if (ingredientInfo.style.display == "none") {
  //     ingredientInfo.style.display = "block";
  //   } else {
  //     ingredientInfo.style.display = "none";
  //   }
  // }

  enableBootstrapPopover(): void {
    var popoverTriggerList = [].slice.call(this.document.querySelectorAll('button[data-bs-toggle="popover"'));
    var popoverList = popoverTriggerList.map(popoverTriggerElement => {
      return new Popover(popoverTriggerElement);
    });
  }

}
