import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-account-button',
  templateUrl: './edit-account-button.component.html',
  styleUrls: ['./edit-account-button.component.css']
})
export class EditAccountButtonComponent implements OnInit {

  userIcon = faUserEdit;
  @Output() showAccount = new EventEmitter<boolean>();
  @Input() account: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.showAccount.emit(true);
  }

}
