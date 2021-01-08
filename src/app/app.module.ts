import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthModule } from "@auth0/auth0-angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment as env } from "../environments/environment";
import { AuthHttpInterceptor } from "@auth0/auth0-angular";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { RecipesService } from './services/recipes.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserIconButtonComponent } from './components/user-icon-button/user-icon-button.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { DeleteAccountButtonComponent } from './components/delete-account-button/delete-account-button.component';
import { ResetPasswordButtonComponent } from './components/reset-password-button/reset-password-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipeDetailComponent,
    FooterComponent,
    FavoritesComponent,
    AuthenticationComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    UserIconButtonComponent,
    UserPortalComponent,
    DeleteAccountButtonComponent,
    ResetPasswordButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    FontAwesomeModule,
    // add and initialize AuthModule
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [
          `^${env.dev.serverUrl}/*`
        ]
      }
    }),
    MatProgressSpinnerModule
  ],
  providers: [
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
