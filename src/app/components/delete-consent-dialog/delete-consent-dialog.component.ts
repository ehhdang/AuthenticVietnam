import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from '../../services/auth.service';
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-consent-dialog',
  templateUrl: './delete-consent-dialog.component.html',
  styleUrls: ['./delete-consent-dialog.component.css']
})
export class DeleteConsentDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {userId: String},
    private usersService: UsersService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<DeleteConsentDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteAccount(): void {
    this.usersService.deleteUser(this.data.userId)
      .subscribe(response => {
        this.auth.logout();
        this.dialogRef.close();
        this.router.navigate(["/router"]);
      });
  }

}
