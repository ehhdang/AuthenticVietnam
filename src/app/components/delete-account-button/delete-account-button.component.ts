import { Component, OnInit, Input, Inject } from '@angular/core';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UsersService } from "../../services/users.service";
import { MatDialog } from "@angular/material/dialog";
import { DeleteConsentDialogComponent } from "../delete-consent-dialog/delete-consent-dialog.component";

@Component({
  selector: 'app-delete-account-button',
  templateUrl: './delete-account-button.component.html',
  styleUrls: ['./delete-account-button.component.css']
})
export class DeleteAccountButtonComponent implements OnInit {

  trashIcon: any = faTrashAlt;
  @Input() userId: String;

  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDeleteConsentDialog(): void {
    this.matDialog.open(DeleteConsentDialogComponent, {
      height: "150px",
      width: "400px",
      data: {userId: this.userId}
    })
  }

}
