import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm = this.fb.group({
    firstname: ["", Validators.required, Validators.min(1), Validators.max(15)],
    lastname: ["", Validators.required, Validators.min(1), Validators.max(15)],
    email: ["", Validators.required],
    password: ["", Validators.required],
    confirmedPassword: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const form = {
      firstname: this.registerForm.get("firstname").value,
      lastname: this.registerForm.get("lastname").value,
      email: this.registerForm.get("email").value,
      password: this.registerForm.get("password").value,
      picture: null,
    }
    this.auth.signup(form.email, form.password, form.firstname, form.lastname, form.picture)
      .subscribe(response => {
        if (response.success) {
          this.auth.login(form.email, form.password)
            .subscribe(res => { 
              if (res.success) { 
                this.router.navigate(["/home"]);
                this.dialogRef.close();
              }
            });
        }
      })
  }

  openLogInDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: "500px",
      height: "450px"
    });
    this.dialogRef.close();
  }

}
