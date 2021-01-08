import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-user-icon-button',
  templateUrl: './user-icon-button.component.html',
  styleUrls: ['./user-icon-button.component.css']
})
export class UserIconButtonComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {}

}
