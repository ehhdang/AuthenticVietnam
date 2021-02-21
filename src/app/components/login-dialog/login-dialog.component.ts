import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";

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
    public dialogRef: MatDialogRef<LoginDialogComponent>,
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
}
