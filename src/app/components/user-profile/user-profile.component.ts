import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { User } from "../../shared/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isFavorite: boolean = true;
  isAccount: boolean = false;
  userInitial: String;
  @Input() user: User;
  @Output() userChoice = new EventEmitter<Object>();


  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userInitial = this.user.firstname.charAt(0).concat(this.user.lastname.charAt(0));
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
