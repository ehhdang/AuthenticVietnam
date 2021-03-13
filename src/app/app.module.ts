import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment as env } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { RecipesService } from './services/recipes.service';
import { UsersService } from "./services/users.service";
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserIconButtonComponent } from './components/user-icon-button/user-icon-button.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { DeleteAccountButtonComponent } from './components/delete-account-button/delete-account-button.component';
import { ResetPasswordButtonComponent } from './components/reset-password-button/reset-password-button.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { DirectionDetailComponent } from './components/direction-detail/direction-detail.component';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { EditAccountButtonComponent } from './components/edit-account-button/edit-account-button.component';
import { ShowFavoriteButtonComponent } from './components/show-favorite-button/show-favorite-button.component';
import { UserUpdateFormComponent } from './user-update-form/user-update-form.component';
import { DeleteConsentDialogComponent } from './components/delete-consent-dialog/delete-consent-dialog.component';
import { RecipeCommentsComponent } from './components/recipe-comments/recipe-comments.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsService } from './services/comments.service';
import { AuthInterceptor } from "./auth-interceptor";
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { AuthService } from "./services/auth.service";

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
    IngredientDetailComponent,
    DirectionDetailComponent,
    RecipeInfoComponent,
    EditAccountButtonComponent,
    ShowFavoriteButtonComponent,
    UserUpdateFormComponent,
    DeleteConsentDialogComponent,
    RecipeCommentsComponent,
    CommentFormComponent,
    RegisterDialogComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [
    RecipesService,
    UsersService,
    CommentsService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  entryComponents: [
    DeleteConsentDialogComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
