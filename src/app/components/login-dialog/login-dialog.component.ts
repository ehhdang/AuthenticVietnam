import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RegisterDialogComponent } from "../register-dialog/register-dialog.component";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const login = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value
    };
    this.auth.login(login.email, login.password)
      .subscribe(res => {
        if (res.success) { 
          this.router.navigate(["/home"]);
          this.dialogRef.close();
         }
      })
  }

  openSignUpDialog(): void {
    this.dialog.open(RegisterDialogComponent, {
      width: "500px",
      height: "640px"
    });
    this.dialogRef.close();
  }
}
