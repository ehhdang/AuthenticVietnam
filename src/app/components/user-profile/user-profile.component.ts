import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isFavorite: boolean = true;
  isAccount: boolean = false;
  @Output() userChoice = new EventEmitter<Object>();


  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userChoice.emit({
      showFavorite: this.isFavorite,
      showAccount: this.isAccount
    })
  }

  showFavorite(show: boolean): void {
    this.isFavorite = show;
    this.isAccount = (!show);
    this.userChoice.emit({
      showFavorite: this.isFavorite,
      showAccount: this.isAccount
    })
  }

  showAccount(show: boolean): void {
    this.isFavorite = (!show);
    this.isAccount = show;
    this.userChoice.emit({
      showFavorite: this.isFavorite,
      showAccount: this.isAccount
    })
  }
}
