import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserPortalComponent } from './user-portal/user-portal.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'recipeDetail/:id', component: RecipeDetailComponent },
  { path: "user-portal", component: UserPortalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
