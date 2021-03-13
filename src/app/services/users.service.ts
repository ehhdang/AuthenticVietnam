import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../shared/User";
import { Recipe } from "../shared/Recipe";
import { environment as env } from "../../environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {}
  
  getUser(): Observable<User> {
    if (this.auth.isLoggedOut()){
      return of(null);
    } else {
      const url = `${env.dev.serverUrl}/users/user`;
      return this.http.get<User>(url)
        .pipe(
          catchError(this.handleError<User>(`getUser`))
        )
    }
  }

  updateUser(user: Object): Observable<User> {
    const url = `${env.dev.serverUrl}/users/user`;
    return this.http.patch<User>(url, { user: user })
      .pipe(
        catchError(this.handleError<User>(`updateUser`))
      );
  }

  deleteUser(): Observable<User> {
    const url = `${env.dev.serverUrl}/users/user`;
    return this.http.delete<User>(url)
      .pipe(
        catchError(this.handleError<User>(`deleteUser`))
      );
  }

  getFavorites(): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/user/favorites`;
    return this.http.get<Recipe[]>(url)
      .pipe(
        catchError(this.handleError<Recipe[]>(`getFavorites`))
      );
  }

  deleteFavorites(): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/user/favorites`;
    return this.http.delete<Recipe[]>(url)
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorites`))
      );
  }

  addFavorite(_id: String): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/user/favorites/add`;
    return this.http.patch<Recipe[]>(url, { recipeId: _id })
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorite`))
      );
  }

  deleteFavorite(_id: String): Observable<Recipe[]> {
    const url = `${env.dev.serverUrl}/users/user/favorites/remove`;
    return this.http.patch<Recipe[]>(url, { recipeId: _id })
      .pipe(
        catchError(this.handleError<Recipe[]>(`deleteFavorite`))
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
