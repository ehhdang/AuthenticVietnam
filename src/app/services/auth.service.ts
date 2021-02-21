import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { environment as env } from "../../environments/environment";
import { User } from "../shared/User";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  signup(email: String, password: String, firstname: String, lastname: String, picture: String): Observable<AuthResponse> {
    const url = `${env.dev.serverUrl}/users/signup`;
    return this.http.post<AuthResponse>(url, { email: email, password: password, firstname: firstname, lastname: lastname, picture: picture })
      .pipe(
        catchError(this.handleError<AuthResponse>('signup()'))
      );
  }

  login(email: String, password: String): Observable<AuthResponse> {
    const url = `${env.dev.serverUrl}/users/login`;
    return this.http.post<AuthResponse>(url, { email: email, password: password })
      .pipe(
        tap(res => this.setSession(res)),
        catchError(this.handleError<AuthResponse>('login()'))
      );
  }

  private setSession(authResult: AuthResponse): void {
    const expiresAt = moment().add(authResult.expiresIn, "second");
    localStorage.setItem("token", authResult.token);
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    const url = `${env.dev.serverUrl}/users/logout`;
    this.http.get(url);
  }

  public isLoggedIn(): boolean {
    const expiration = JSON.parse(localStorage.getItem("expiresAt"));
    return expiration != null && moment().isBefore(moment(expiration));
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
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

class AuthResponse {
  status: string;
  success: boolean;
  token: string;
  expiresIn: number;
  user: User;
  err: string;
}
