import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
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
    this.auth.user$.subscribe(user => {
      this.usersService.getUser(user.sub).subscribe(completeUser => {
        this.user = completeUser;
      })
    });
  }

  showChoice(choice: Object) {
    this.action = choice;
  }

}
