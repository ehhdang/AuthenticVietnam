import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../shared/User";
import { Recipe } from "../shared/Recipe";
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}
  
  getUser(authId: String): Observable<User> {
    const url = `${env.dev.serverUrl}/users/${authId}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>(`getUser authId=${authId}`))
      );
  }

  updateUser(authId: String, content: Object): Observable<User> {
    const url = `${env.dev.serverUrl}/users/${authId}`;
    return this.http.patch<User>(url, content)
      .pipe(
        catchError(this.handleError<User>(`updateUser authId=${authId}`))
      );
  }

  deleteUser(authId: String): Observable<User> {
    const url = `${env.dev.serverUrl}/users/${authId}`;
    return this.http.delete<User>(url)
      .pipe(
        catchError(this.handleError<User>(`deleteUser authId=${authId}`))
      );
  }

  getFavorites(authId: String): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/${authId}/favorites`;
    return this.http.get<Recipe[]>(url)
      .pipe(
        catchError(this.handleError<Recipe[]>(`getFavorites authId=${authId}`))
      );
  }

  deleteFavorites(authId: String): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/${authId}/favorites`;
    return this.http.delete<Recipe[]>(url)
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorites authId=${authId}`))
      );
  }

  addFavorite(authId: String, content: Object): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/${authId}/favorites`;
    return this.http.patch<Recipe[]>(url, content)
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorite authId=${authId}`))
      );
  }

  deleteFavorite(authId: String, favoriteId: String): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/${authId}/favorites/${favoriteId}`;
    return this.http.delete<Recipe[]>(url)
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorite authId=${authId} favoriteId=${favoriteId}`))
      );
  }

  isFavorite(authId: String, favoriteId: String): Observable<Boolean> {
    const url = `${env.dev.serverUrl}/users/${authId}/favorites/isFavorite?recipeId=${favoriteId}`;
    return this.http.get<Boolean>(url)
      .pipe(
        catchError(this.handleError<Boolean>(`isFavorite authId=${authId} favoriteId=${favoriteId}`))
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
