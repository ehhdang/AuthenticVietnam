import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { AuthService } from "../../services/auth.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
   this.dialog.open(LoginDialogComponent, {
    width: "500px",
    height: "450px"
   })
  }

}
