import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AuthService } from '@auth0/auth0-angular';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-delete-consent-dialog',
  templateUrl: './delete-consent-dialog.component.html',
  styleUrls: ['./delete-consent-dialog.component.css']
})
export class DeleteConsentDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {userId: String},
    private usersService: UsersService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
  ) { }

  ngOnInit(): void {
  }

  deleteAccount(): void {
    this.usersService.deleteUser(this.data.userId)
      .subscribe(response => {
        console.log(response);
        this.auth.logout({returnTo: this.doc.location.origin});
      });
  }

}
