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

  private commentUrl = `${env.dev.serverUrl}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  postComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, comment)
      .pipe(
        catchError(this.handleError<Comment>(`postComment ${comment}`))
      );
  }

  putComment(commentId: String, content: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.commentUrl}/commentId`, content)
      .pipe(
        catchError(this.handleError<Comment>(`putComment ${commentId} ${content}`))
      );
  }

  deleteComment(commentId: String): Observable<Comment> {
    return this.http.delete<Comment>(`${this.commentUrl}/commentId`)
      .pipe(
        catchError(this.handleError<Comment>(`deleteComment ${commentId}`))
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
