import { Injectable } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { Ingredient } from '../shared/Ingredient';
import { Direction } from '../shared/Direction';
import { Comment } from "../shared/Comment";
import { environment as env } from "../../environments/environment";

import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

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

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeURL)
      .pipe(
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  getRecipe(id: String): Observable<Recipe> {
    const url = `${this.recipeURL}/recipe?recipeId=${id}`;
    return this.http.get<Recipe>(url)
      .pipe(
        catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
      );
  }

  getComments(id: String): Observable<Comment[]> {
    const url = `${this.recipeURL}/recipe/comments?recipeId=${id}`;
    return this.http.get<Comment[]>(url)
      .pipe(
        catchError(this.handleError<Comment[]>(`getComments from recipeId=${id}`, []))
      );
  }

  postComment(id: String, commentId: String): Observable<Comment[]> {
    const url = `${this.recipeURL}/recipe/comments?recipeId=${id}`;
    return this.http.post<Comment[]>(url, {comment: commentId})
      .pipe(
        catchError(this.handleError<Comment[]>(`postComment to recipeId=${id}`))
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
