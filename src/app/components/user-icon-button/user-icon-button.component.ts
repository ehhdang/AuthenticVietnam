import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-user-icon-button',
  templateUrl: './user-icon-button.component.html',
  styleUrls: ['./user-icon-button.component.css']
})
export class UserIconButtonComponent implements OnInit {

  initial: String;

  constructor(
    public authService: AuthService,
    public users: UsersService
  ) { }

  ngOnInit(): void {
    this.users.getUser()
      .subscribe(user => {
        this.initial = user.firstname.charAt(0).concat(user.lastname.charAt(0));
      })
  }

}
