import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { User } from '../shared/User';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {

  action: Object;
  user: User;

  constructor(
    public auth: AuthService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.action = {
      showFavorite: true,
      showAccount: false
    };
    this.usersService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  showChoice(choice: Object) {
    this.action = choice;
  }

}
