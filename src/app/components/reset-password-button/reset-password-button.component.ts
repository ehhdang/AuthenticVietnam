import { Component, OnInit } from '@angular/core';
import { faTools } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-reset-password-button',
  templateUrl: './reset-password-button.component.html',
  styleUrls: ['./reset-password-button.component.css']
})
export class ResetPasswordButtonComponent implements OnInit {

  resetIcon:any = faTools;

  constructor() { }

  ngOnInit(): void {
  }

}
