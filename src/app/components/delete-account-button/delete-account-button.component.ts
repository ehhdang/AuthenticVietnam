import { Component, OnInit } from '@angular/core';
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-delete-account-button',
  templateUrl: './delete-account-button.component.html',
  styleUrls: ['./delete-account-button.component.css']
})
export class DeleteAccountButtonComponent implements OnInit {

  trashIcon: any = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
