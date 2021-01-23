import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { AuthService } from "@auth0/auth0-angular";
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
    private auth: AuthService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    this.auth.user$.subscribe(user => {
      this.usersService.getUser(user.sub).subscribe(completeUser => {this.user = completeUser; console.log(this.user);});
    });
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id)
      .subscribe(recipe => { this.recipe = recipe });
  }

}
