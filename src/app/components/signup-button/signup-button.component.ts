import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { RegisterDialogComponent } from "../register-dialog/register-dialog.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  signupWithRedirect(): void {
    this.dialog.open(RegisterDialogComponent, {
      width: "500px",
      height: "560px"
    })
  }

}
