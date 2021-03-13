import { Injectable } from '@angular/core';
import { Comment } from "../shared/Comment";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../environments/environment";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentURL = `${env.dev.serverUrl}/recipes/recipe/comments`;

  constructor(
    private http: HttpClient
  ) { }

  getComments(recipeId: String): Observable<Comment[]> {
    const url = `${this.commentURL}?recipeId=${recipeId}`;
    return this.http.get<Comment[]>(url)
      .pipe(
        catchError(this.handleError<Comment[]>(`getComments of recipeId = ${recipeId}`))
      )
  }
  postComment(recipeId: String, comment: Comment): Observable<Comment[]> {
    const url = `${this.commentURL}?recipeId=${recipeId}`;
    return this.http.post<Comment[]>(url, comment)
      .pipe(
        catchError(this.handleError<Comment[]>(`postComment ${comment}`))
      );
  }

  modifyComment(recipeId: String, commentId: String, comment: Comment): Observable<Comment[]> {
    const url = `${this.commentURL}?recipeId=${recipeId}&commentId=${commentId}`;
    return this.http.patch<Comment[]>(url, comment)
      .pipe(
        catchError(this.handleError<Comment[]>(`modifyComment ${commentId} ${comment}`))
      );
  }

  deleteComment(recipeId: String, commentId: String): Observable<Comment[]> {
    const url = `${this.commentURL}?recipeId=${recipeId}&commentId=${commentId}`;
    return this.http.delete<Comment[]>(url)
      .pipe(
        catchError(this.handleError<Comment[]>(`deleteComment ${commentId}`))
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
