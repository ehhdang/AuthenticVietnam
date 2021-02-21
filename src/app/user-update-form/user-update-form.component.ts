import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../services/users.service";
import { AuthService } from "../services/auth.service";
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
    firstname: ["", [Validators.required, Validators.min(1), Validators.max(15)] ],
    lastname: ["", [Validators.required, Validators.min(1), Validators.max(15)] ],
    email: ["", [Validators.required, Validators.min(1), Validators.max(15)] ]
  });

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.userProfile.patchValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname,
    });
    this.userProfile.disable();
  }

  onSubmit(): void {
    const formUpdate = this.userProfile.value;
    this.userProfile.patchValue({
      firstname: formUpdate.firstname,
      lastname: formUpdate.lastname,
      email: formUpdate.email
    });
    this.usersService.updateUser(this.user._id, formUpdate)
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
      firstname: this.user.firstname,
      lastname: this.user.lastname,
    });
    this.userProfile.disable();
  }

  getErrorMessage(): String {
    var errorMessage: String = "";
    if (this.userProfile.get('firstname').hasError("required") || this.userProfile.get('firstname').hasError("maxlength")) {
      errorMessage = "firstname must be between 1 and 15 characters";
    }
    if (this.userProfile.get('lastname').hasError("required") || this.userProfile.get('lastname').hasError("maxlength")) {
      errorMessage = "lastname must be between 1 and 15 characters";
    }
    return errorMessage;
  }
}
