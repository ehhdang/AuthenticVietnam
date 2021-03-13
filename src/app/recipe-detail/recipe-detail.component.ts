import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { User } from '../shared/User';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  user: User;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    this.usersService.getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id)
      .subscribe(recipe => { this.recipe = recipe; });
  }

}
