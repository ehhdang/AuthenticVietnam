import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';
import { faChevronLeft, faList, faHeart as sfaHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as rfaHeart } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from "@auth0/auth0-angular";
import { UsersService } from "../../services/users.service";
import { User } from 'src/app/shared/User';
import { Location } from '@angular/common';

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
  comment = faList;
  //data fields
  @Input() recipe: Recipe;
  @Input() user: User;
  isFavorite: Boolean = false;

  constructor(
    public auth: AuthService,
    public usersService: UsersService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    if (this.user !== null) {
      this.usersService.isFavorite(this.user.user_id, this.recipe._id)
        .subscribe(answer => this.isFavorite = answer);
    }
  }

  addFavorite(): void {
    this.usersService.addFavorite(this.user.user_id, { favorite: this.recipe._id })
      .subscribe(favorites => this.isFavorite = true);
  }

  deleteFavorite(): void {
    this.usersService.deleteFavorite(this.user.user_id, this.recipe._id)
      .subscribe(favorites => this.isFavorite = false);
  }

  goBack(): void {
    this.location.back();
  }

}
