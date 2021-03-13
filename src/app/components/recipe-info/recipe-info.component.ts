import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';
import { faChevronLeft, faUtensils, faHeart as sfaHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as rfaHeart } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";
import { User } from 'src/app/shared/User';
import { Location } from '@angular/common';
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  // fontawesome icon
  backArrow = faChevronLeft;
  rHeart = rfaHeart;
  sHeart = sfaHeart;
  utensils = faUtensils;
  //data fields
  @Input() recipe: Recipe;
  @Input() user: User;
  isFavorite: Boolean = false;

  constructor(
    public auth: AuthService,
    public usersService: UsersService,
    private location: Location,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.user !== null) {
      this.usersService.getFavorites().subscribe(favorites => {
        this.isFavorite = false;
        favorites.forEach(recipe => {
          if (recipe._id == this.recipe._id) { this.isFavorite = true; }
        });
      })
    }
  }

  addFavorite(): void {
    this.usersService.addFavorite(this.recipe._id)
      .subscribe(favorites => this.isFavorite = true);
  }

  deleteFavorite(): void {
    this.usersService.deleteFavorite(this.recipe._id)
      .subscribe(favorites => this.isFavorite = false);
  }

  goBack(): void {
    this.location.back();
  }

  openLogInDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: "500px",
      height: "450px"
    })
  }

}
