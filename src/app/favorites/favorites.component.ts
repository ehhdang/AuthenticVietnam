import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../shared/Recipe";
import { UsersService } from "../services/users.service";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  @Input() userId: String;
  favorites: Recipe[];
  trashIcon = faTrashAlt;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getFavorites(this.userId)
      .subscribe(recipes => {this.favorites = recipes});
  }

  deleteAllFavorites(): void {
    this.usersService.deleteFavorites(this.userId)
      .subscribe(recipes => this.favorites = recipes);
  }

}
