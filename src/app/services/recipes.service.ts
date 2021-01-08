import { Injectable } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { Ingredient } from '../shared/Ingredient';
import { Direction } from '../shared/Direction';
// import { RECIPES } from '../shared/RecipeDB';

import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  /**
   * Use local recipe objects to test development
   */
  // recipes: Recipe[] = RECIPES;
  // favorites: Recipe[] = [];

  // constructor() {}

  // getRecipes(): Observable<Recipe[]> {
  //   return of(this.recipes);
  // }

  // getRecipe(id: String): Observable<Recipe> {
  //   var selected: Recipe[];
  //   selected = this.recipes.filter(recipe => {return recipe.id == id});
  //   return of(selected[0]);
  // }

  // addFavorite(id: String): boolean {
  //   this.recipes.map(recipe => {
  //     if (recipe.id == id) {
  //       this.favorites.push(recipe);
  //       console.log(this.favorites);
  //     };
  //   });
  //   return true;
  // }

  // removeFavorite(id: String): boolean {
  //   this.recipes.map(recipe => {
  //     if (recipe.id == id) {
  //       const i = this.recipes.indexOf(recipe);
  //       this.favorites = (this.favorites.slice(0, i)).concat(this.favorites.slice(i+1));
  //     }
  //   })
  //   return true;
  // }

  // getFavorites(): Observable<Recipe[]> {
  //   return of(this.favorites);
  // }

  // isFavorite(id: String): boolean {
  //   var isFavorite: boolean = false;
  //   this.favorites.map(recipe => {
  //     if (recipe.id == id) {
  //       (isFavorite = true)
  //     }
  //   });
  //   return isFavorite;
  // }

  /**
   * Call Backend API
   */
  private recipeURL = "http://localhost:3000/recipes";

  constructor(
    private http: HttpClient,
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeURL)
      .pipe(
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  getRecipe(id: String): Observable<Recipe> {
    const url = `${this.recipeURL}/${id}`;
    return this.http.get<Recipe>(url)
      .pipe(
        catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed
   * Let the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // Log to console instead

      // TODO: better job of transformating error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by return an empty result
      return of(result as T);
    }
  }

}
