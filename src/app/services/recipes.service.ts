import { Injectable } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { environment as env } from "../../environments/environment";

import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  /**
   * Call Backend API
   */
  private recipeURL = `${env.dev.serverUrl}/recipes`;

  constructor(
    private http: HttpClient,
  ) { }

  //good
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeURL)
      .pipe(
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  //good
  getRecipe(id: String): Observable<Recipe> {
    const url = `${this.recipeURL}/recipe?recipeId=${id}`;
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
