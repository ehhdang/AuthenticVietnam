import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../services/users.service";
import { AuthService } from "@auth0/auth0-angular";
import { User } from '../shared/User';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.css']
})
export class UserUpdateFormComponent implements OnInit {

  editIcon = faEdit;
  timesIcon = faTimes;
  @Input() user: User;
  userProfile = this.fb.group({
    given_name: ["", Validators.required],
    family_name: ["", Validators.required],
    username: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\+\-\.\!\#\$\'\^\`\~\@]+$/), Validators.maxLength(15)]]
  });

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.userProfile.patchValue({
      given_name: this.user.given_name,
      family_name: this.user.family_name,
      username: this.user.username,
    });
    this.userProfile.disable();
  }

  onSubmit(): void {
    const formUpdate = this.userProfile.value;
    this.userProfile.patchValue({
      given_name: formUpdate.given_name,
      family_name: formUpdate.family_name,
      username: formUpdate.username
    });
    this.usersService.updateUser(this.user.user_id, formUpdate)
      .subscribe(user => {
        this.userProfile.disable();
        window.location.reload();
      });
  }

  enableUpdate(): void {
    this.userProfile.enable();
  }

  cancel(): void {
    this.userProfile.patchValue({
      given_name: this.user.given_name,
      family_name: this.user.family_name,
      username: this.user.username
    });
    this.userProfile.disable();
  }

  getErrorMessage(): String {
    var errorMessage: String = "";
    if (this.userProfile.get('username').hasError("required") || this.userProfile.get('username').hasError("maxlength")) {
      errorMessage = "username must be between 1 and 15 characters";
      console.log("errors in length requirement");
    }
    if (this.userProfile.get('username').hasError("pattern")) {
      errorMessage = "Username can only contain alphanumeric characters and these characters: _ + - . ! # $ ' ^ ` ~ @";
    }
    return errorMessage;
  }
}
