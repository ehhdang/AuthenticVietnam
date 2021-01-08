import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signupWithRedirect(): void {
    this.authService.loginWithRedirect({
      screen_hint: "signup",
    })
  }

}
